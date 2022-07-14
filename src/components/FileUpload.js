import {Button} from "@chakra-ui/react";
import React, {useRef} from "react";
import {AiOutlinePlus} from "react-icons/ai";
import {isValidImage, processImage} from "../utils/helpers";

const FileUpload = ({buttonTitle, onChange}) => {
  const inputRef = useRef()

  return (
    <div>
      <input
        type='file'
        accept='image/*'
        ref={inputRef}
        style={{display: 'none'}}
        onChange={() => {
          const file = inputRef?.current?.files?.[0]
          if (!isValidImage(file)) {
            alert("El archivo es muy grande");
          } else {
            processImage(file).then(img => onChange(img))
          }
        }}
      />
      <Button
        onClick={() => inputRef.current.click()}
        colorScheme='main'
        aria-label='Ver carrito'
        size='xs'
        shadow='md'
        icon={<AiOutlinePlus color='black' size="22" mr={1}/>}
      >
        {buttonTitle}
      </Button>
    </div>
  )
}

export default FileUpload
