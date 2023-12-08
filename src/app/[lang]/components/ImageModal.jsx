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

export default function ImageModal({ selectedImage }) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  return (
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
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
