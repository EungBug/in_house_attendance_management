import { create } from 'zustand';

export type ModalData = {
  title: string;
  content: string;
  confirm: string;
  onClickConfirm?: () => void;
  cancel?: string;
  onClickCancel?: () => void;
};

interface ModalState {
  isOpen: boolean;
  data: ModalData | null;
  openModal: (data: ModalData) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  data: null,
  openModal: (data) => set({ data: data, isOpen: true }),
  closeModal: () => set({ data: null, isOpen: false }),
}));
