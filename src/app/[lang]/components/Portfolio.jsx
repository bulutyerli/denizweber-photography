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

export default function Portfolio({ images, translate }) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpen = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 w-screen xl:px-6 items-center justify-center">
        {images.length > 0 &&
          images.map((image, i) => (
            <div
              className="flex items-center justify-center cursor-pointer"
              key={i}
              onClick={() => handleOpen(image)}
            >
              <Image
                className="object-cover h-36 lg:h-96 w-auto flex-grow cursor-pointer"
                src={image.imageUrl}
                height={800}
                width={800}
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
                  className="object-fill"
                  src={selectedImage.imageUrl}
                  width={1200}
                  height={1200}
                  alt={selectedImage.title}
                ></Image>
              </ModalBody>
              <ModalFooter>
                <Button color="foreground" variant="light" onPress={onClose}>
                  {translate.close}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
