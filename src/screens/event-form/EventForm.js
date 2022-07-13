import React, {useEffect, useState} from "react";
import {Box, Button, HStack, Image, Input, Select, Stack, Text, VStack} from "@chakra-ui/react";
import {Toolbar} from "../../components/Toolbar";
import {useNavigate, useParams} from "react-router";
import {colors} from "../../core/theme";
import FileUpload from "../../components/FileUpload";
import {objectHasEmptyAttrs} from "../../utils/helpers";
import {editEvent, newEvent, traer_evento} from "../../services/Calls";

const TitlePageStyle = {
  fontSize: "25px",
  fontWeight: "bold",
  margin: "20px",
};

const TicketsTitleStyle = {
  fontSize: "22px",
  fontWeight: "bold",
  margin: "22px 0 -10px 0",
};

const FormTitleStyle = {
  fontSize: "14px",
  fontWeight: "bold",
  margin: "20px 0 10px 0",
};

const InputFocusStyle = {
  borderColor: colors.mainColor,
  boxShadow: `0 0 0 1px ${colors.mainColor}`
};

const InputStyle = {
  fontSize: '15px'
};

const ImageWithButton = ({width, height, img, buttonTitle, onChange}) => {
  return (
    <Box
      position='relative'
      w={`${width + 2}px`}
      h={`${height + 3}px`}
      rounded={20}
      color="white"
      boxShadow="dark-xs"
      objectFit="cover"
      sx={{
        bg: '#1F1F1F',
        border: '2px dashed gray'
      }}
    >
      <Image
        src={img}
        fallbackSrc="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        alt="Ticket photo"
        w={`${width}px`}
        h={`${height}px`}
        objectFit="cover"
        rounded={20}
        sx={{
          filter: 'opacity(45%)'
        }}
      />
      <Box
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        zIndex={1}
      >
        <FileUpload buttonTitle={buttonTitle} onChange={onChange}/>
      </Box>
    </Box>
  )
}

const TicketForm = ({ticket, index, onChangeEventTicket}) => {
  return (
    <HStack justifyContent='space-between'>
      <div>
        <Text sx={FormTitleStyle}>Nombre</Text>
        <Input
          w='105px'
          id='ticket-name'
          type='text'
          placeholder='Nombre'
          defaultValue={ticket?.description}
          onChange={(e) => onChangeEventTicket(index, "description", e.target.value)}
          _focus={InputFocusStyle}
          style={InputStyle}
        />
      </div>
      <div>
        <Text sx={FormTitleStyle}>Precio</Text>
        <Input
          w='105px'
          id='location'
          type='ticket-price'
          placeholder='ARS'
          defaultValue={ticket?.price}
          onChange={(e) => onChangeEventTicket(index, "price", parseInt(e.target.value))}
          _focus={InputFocusStyle}
          style={InputStyle}
        />
      </div>
      <div>
        <Text sx={FormTitleStyle}>Cantidad</Text>
        <Input
          w='105px'
          id='ticket-supply'
          type='number'
          placeholder='Cantidad'
          defaultValue={ticket?.total_supply}
          onChange={(e) => onChangeEventTicket(index, "total_supply", parseInt(e.target.value))}
          _focus={InputFocusStyle}
          style={InputStyle}
        />
      </div>
    </HStack>
  )
}

const defaultTicket = {
  description: "",
  price: '',
  total_supply: ''
}

export const EventForm = () => {
  const {eventId} = useParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState({
    title: "",
    event_type: "",
    location: "",
    event_datetime: "",
    event_image_url: "",
    ticket_image_url: "",
    buy_image_1_url: "",
    buy_image_2_url: "",
    tickets: [defaultTicket]
  })

  useEffect(() => {
    const fetchEvent = async () => {
      return await traer_evento(eventId).then((res) => {
        setEvent(res);
      });
    }

    if (eventId) {
      fetchEvent()
    }
  }, [eventId])

  const onChangeEvent = (key, value) => {
    setEvent(event => ({...event, [key]: value}))
  }

  const onChangeEventTicket = (index, key, value) => {
    setEvent(event => ({
      ...event,
      tickets: [
        ...event?.tickets?.slice(0, index),
        ({...event?.tickets?.[index], [key]: value}),
        ...event?.tickets?.slice(index + 1, event?.tickets?.length)
      ]
    }))
  }

  const submitForm = async () => {
    if (!eventId) {
      await newEvent(event).then(res => navigate(`/event/${res?.id}`))
    } else {
      await editEvent(eventId, {
        ...event, tickets: event?.tickets?.map(t => {
          delete t.id
          return t
        })
      }).then(res => navigate(`/event/${res?.id}`))
    }
  }

  const keys = ['title', 'event_type', 'location', 'event_datetime', 'event_image_url', 'ticket_image_url',
    'buy_image_1_url', 'buy_image_2_url', 'tickets', 'price', 'total_supply']
  const disableSubmitButton = objectHasEmptyAttrs(event, keys)

  return (
    <>
      <Toolbar/>
      <VStack pb={5} spacing={5}>
        <Box backgroundColor="#121212">
          <Stack alignItems="center">
            <Text sx={TitlePageStyle}>{eventId ? 'Editar ' + event?.title : 'Crear un evento'}</Text>
          </Stack>
          <Box mb={8}>
            <ImageWithButton
              width={330}
              height={400}
              img={event?.ticket_image_url}
              buttonTitle={eventId ? 'Cambiar imagen del NFT' : 'Subir imagen del NFT'}
              onChange={(value) => onChangeEvent('ticket_image_url', value)}
            />
          </Box>
          <div>
            <Text sx={FormTitleStyle}>Nombre del evento</Text>
            <Input
              id='title'
              type='text'
              placeholder='Ingrese nombre del evento'
              defaultValue={event?.title}
              onChange={(e) => onChangeEvent("title", e.target.value)}
              _focus={InputFocusStyle}
              style={InputStyle}
            />
          </div>
          <div>
            <Text sx={FormTitleStyle}>Lugar</Text>
            <Input
              id='location'
              type='text'
              placeholder='Ingrese lugar del evento'
              defaultValue={event?.location}
              onChange={(e) => onChangeEvent("location", e.target.value)}
              _focus={InputFocusStyle}
              style={InputStyle}
            />
          </div>
          <div>
            <Text sx={FormTitleStyle}>Fecha y hora</Text>
            <Input
              id='date'
              type='datetime-local'
              placeholder='Seleccione fecha y hora'
              defaultValue={
                event?.event_datetime
                  ? (new Date(event?.event_datetime)).toISOString().slice(0, -8)
                  : ''
              }
              onChange={(e) => onChangeEvent("event_datetime", e.target.value)}
              _focus={InputFocusStyle}
              style={InputStyle}
              color="#ffffff"
            />
          </div>
          <div>
            <Text sx={FormTitleStyle}>Categoría</Text>
            <Select
              placeholder='Seleccione una categoría'
              colorMode='dark'
              style={InputStyle}
              value={event?.event_type}
              onChange={(e) => onChangeEvent("event_type", e.target.value)}
            >
              <option value='Fiesta'>Fiesta</option>
              <option value='Deporte'>Deporte</option>
              <option value='Musica'>Música</option>
            </Select>
          </div>
          <Box mb="18px" mt='30px'>
            <ImageWithButton
              width={330}
              height={140}
              img={event?.event_image_url}
              buttonTitle={eventId ? 'Cambiar flyer' : 'Subir flyer'}
              onChange={(value) => onChangeEvent('event_image_url', value)}
            />
          </Box>
          <HStack gap="15px" justifyContent='center'>
            <ImageWithButton
              width={150}
              height={200}
              img={event?.buy_image_1_url}
              buttonTitle={eventId ? 'Cambiar foto 1' : 'Subir foto 1'}
              onChange={(value) => onChangeEvent('buy_image_1_url', value)}
            />
            <ImageWithButton
              width={150}
              height={200}
              img={event?.buy_image_2_url}
              buttonTitle={eventId ? 'Cambiar foto 2' : 'Subir foto 2'}
              onChange={(value) => onChangeEvent('buy_image_2_url', value)}
            />
          </HStack>
          <Box w='100%'>
            <Text sx={TicketsTitleStyle} align='left'>Tipos de ticket</Text>
            {event?.tickets.map((ticket, index) => (
              <TicketForm key={index} ticket={ticket} index={index} onChangeEventTicket={onChangeEventTicket}/>
            ))}
            <HStack my={5}>
              <Button
                colorScheme="gray"
                color='black'
                w={'100%'}
                size='xs'
                disabled={event?.tickets?.length <= 1}
                onClick={() => setEvent(e => ({...e, tickets: [...e.tickets.slice(0, -1)]}))}
              >
                Quitar
              </Button>
              <Button
                colorScheme="main"
                w={'100%'}
                size='xs'
                onClick={() => setEvent(e => ({...e, tickets: [...e.tickets, defaultTicket]}))}
              >
                Agregar
              </Button>
            </HStack>
          </Box>
          <Button colorScheme="main" w={'100%'} mt={5} onClick={submitForm} disabled={disableSubmitButton}>
            Guardar cambios
          </Button>
        </Box>
      </VStack>
    </>
  )
}
