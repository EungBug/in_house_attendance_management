import { TbX } from 'react-icons/tb';
import Modal from 'react-modal';
import { useModalStore } from '../model/useModalStore';

const CommonModal = () => {
  const { isOpen, data, closeModal } = useModalStore();

  return data ? (
    <Modal
      isOpen={isOpen}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          width: '100%',
          height: '100vh',
          zIndex: 10,
          position: 'fixed',
          top: 0,
          left: 0,
        },
        content: {
          width: '90%',
          height: 'auto',
          zIndex: 150,
          position: 'absolute',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          borderRadius: '12px',
          boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
          backgroundColor: 'white',
          justifyContent: 'center',
          overflow: 'auto',
        },
      }}
    >
      <div className='relative flex h-full flex-col'>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-semibold text-neutral-900'>{data.title}</h2>
          <button onClick={closeModal}>
            <TbX className='text-2xl' />
          </button>
        </div>

        <div className='mt-3 textarea-md text-neutral-800'>{data.content ?? '아아아'}</div>

        <div className='mt-5 flex items-center gap-3'>
          {data.cancel && (
            <button
              className='btn flex-1'
              onClick={() => {
                data.onClickCancel?.();
                closeModal();
              }}
            >
              {data.cancel}
            </button>
          )}

          <button
            className='btn flex-1 btn-primary'
            onClick={() => {
              data.onClickConfirm?.();
              closeModal();
            }}
          >
            {data.confirm}
          </button>
        </div>
      </div>
    </Modal>
  ) : null;
};

export default CommonModal;
