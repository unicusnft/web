import {useEffect, useState} from "react";
import {Avatar, Button, CircularProgress, Flex, Menu, MenuButton, MenuItem, MenuList, Stack} from "@chakra-ui/react";
import {colors} from "../core/theme";
import {users} from "../data/users";
import {LocalStorageGetCurrentUser, LocalStorageSeCurrentUser} from "../utils/helpers";

const MenuListStyle = {
    backgroundColor: colors.backgroundComponentLighter,
    borderColor: colors.backgroundComponentLighter
};

const MenuItemSelected = {
    backgroundColor: colors.backgroundComponentSelected,
    borderColor: colors.backgroundComponentSelected
};

const UserNameStyle = {
    fontSize: '16px',
    padding: '0 0 0 16px',
    margin: '0',
    color: 'white'
}

const UserRoleStyle = {
    fontSize: '14px',
    padding: '0 0 0 16px',
    margin: '0',
    color: colors.textSecondaryColor
}

export const UserMenu = () => {
    const [currentUser, setCurrentUser] = useState(LocalStorageGetCurrentUser())

    const SetCurrentUser = (user) => {
        LocalStorageSeCurrentUser(user)
        setCurrentUser(user)
    }

    useEffect(() => {
        const fetchUsers = async () => {
            return users
        }
        fetchUsers().then((users) => {
            if (!currentUser) {
                SetCurrentUser(users?.[0])
            }
        })
    }, [])

    const getMenuItemColor = (user) => {
        return currentUser?.username === user?.username ? MenuItemSelected : MenuListStyle
    }

    if (!currentUser) {
        return <CircularProgress isIndeterminate size='32px' color={colors.mainColor}/>
    }

    return (
        <Flex alignItems={'center'}>
            <Menu>
                <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}
                >
                    <Avatar size={'sm'} src={currentUser?.avatar}/>
                </MenuButton>
                <MenuList sx={MenuListStyle}>
                    {users.map((user) => (
                        <MenuItem
                            key={'user' + user?.username}
                            _active={getMenuItemColor(user)}
                            _hover={getMenuItemColor(user)}
                            _expanded={getMenuItemColor(user)}
                            _focus={getMenuItemColor(user)}
                            sx={currentUser?.username === user?.username ? MenuItemSelected : {}}
                            onClick={() => SetCurrentUser(user)}
                        >
                            <Avatar size={'md'} src={user?.avatar}/>
                            <Stack gap={0}>
                                <div style={UserNameStyle}>{user?.name}</div>
                                <div style={UserRoleStyle}>{user?.role}</div>
                            </Stack>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Flex>
    )
}
