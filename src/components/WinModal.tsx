import { FC, Dispatch, SetStateAction } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

interface WinModalProps {
  open: boolean;
  steps: number;
  time: number;
  optimalMoves: number;
  setOpen: Dispatch<SetStateAction<boolean>>;
  reset: () => void;
}

const WinModal: FC<WinModalProps> = ({ open, steps, time, optimalMoves, setOpen, reset }) => {
  const efficiency = optimalMoves > 0 ? Math.round((optimalMoves / steps) * 100) : 100;
  
  return (
    <>
      <Modal
        isOpen={open}
        onOpenChange={() => {
          setOpen(false);
          reset();
        }}
        isDismissable={false}
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">You won!</ModalHeader>
            <ModalBody>
              <div className="space-y-2">
                <p>
                  You spent {time} seconds with {steps} steps.
                </p>
                <p>
                  Optimal solution: {optimalMoves} moves
                </p>
                <p className="text-sm text-gray-600">
                  Efficiency: {efficiency}% ({steps > optimalMoves ? steps - optimalMoves : 0} extra moves)
                </p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onPress={() => {
                  setOpen(false);
                  reset();
                }}
              >
                Restart
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WinModal;
