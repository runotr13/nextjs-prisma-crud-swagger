import { toast } from 'react-toastify'
// import { css } from 'glamor';
export const toastWarnNotify = (msg, mode) => {
  toast.warn(msg, {
    theme: mode ? 'light' : 'dark',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
}

export const toastSuccessNotify = (msg, mode) => {
  toast.success(msg, {
    theme: mode ? 'light' : 'dark',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
}
export const toastSuccessCopy = (msg, mode) => {
  toast.success(msg, {
    // progressClassName: css({
    //   background: '#34A853',
    // }),
    theme: mode ? 'light' : 'dark',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
}

export const toastErrorNotify = (msg, mode) => {
  toast.error(msg, {
    theme: mode ? 'light' : 'dark',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
}
