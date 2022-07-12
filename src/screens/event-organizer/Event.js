import {useParams} from "react-router";
import {Toolbar} from "../../components/Toolbar";
import React, {useEffect, useState} from "react";
import {EventCardOrganizer} from "../../components/EventCardOrganizer";
import {Box, VStack} from "@chakra-ui/react";
import {newEvent} from "../../data/new-event";
import {Link} from "react-router-dom";

export const Event = () => {
    const {eventId} = useParams()
    const [event, setEvent] = useState({})

    useEffect(() => {
        const fetchEvent = async (id) => {
            return newEvent
        }

        fetchEvent(eventId).then((data) => {
            setEvent(data)
        })
    }, [])

    return (
        <>
            <Toolbar/>
            <VStack justifyContent="center" mt={5}>
                <Link to={`/event-form/${event?.id}`}>
                    <EventCardOrganizer
                        id={event?.id}
                        title={event?.title}
                        type={event?.event_type}
                        location={event?.location}
                        datetime={new Date(event?.event_datetime)}
                        imgUrl={event?.event_image_url}
                        edit
                    />
                </Link>
            </VStack>
        </>
    )
}
