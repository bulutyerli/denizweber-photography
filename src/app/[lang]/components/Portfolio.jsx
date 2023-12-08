"use client";

import React, { useState } from "react";
import {
  Image,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import NextImage from "next/image";

export default function Portfolio({ images }) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 w-screen xl:px-6 items-center justify-center">
        {images.map((image, i) => (
          <div
            className="flex items-center justify-center cursor-pointer"
            key={i}
            onClick={() => handleOpen(image)}
          >
            <Image
              as={NextImage}
              className="object-cover h-36 lg:h-96 w-full flex-grow cursor-pointer"
              src={image.imageUrl}
              height={500}
              width={500}
              alt={image.title}
              isZoomed
            ></Image>
          </div>
        ))}
      </div>
      <Modal
        size="2xl"
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="2xl"
        placement="center"
        scrollBehavior="inside"
      >
        <ModalContent className="flex items-center justify-center">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {selectedImage.title}
              </ModalHeader>
              <ModalBody className="max-h-screen">
                <Image
                  as={NextImage}
                  className="object-fill"
                  src={selectedImage.imageUrl}
                  width={1200}
                  height={1200}
                  alt={selectedImage.title}
                ></Image>
              </ModalBody>
              <ModalFooter>
                <Button color="foreground" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
