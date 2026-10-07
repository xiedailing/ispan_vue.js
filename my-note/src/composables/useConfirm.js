import { reactive } from 'vue'

export const confirmState = reactive({
  open: false,
  message: '',
  confirmText: '刪除',
  resolve: null
})

// 顯示確認視窗，回傳 Promise<boolean>
export function askConfirm(message, confirmText = '刪除') {
  return new Promise(resolve => {
    confirmState.message = message
    confirmState.confirmText = confirmText
    confirmState.resolve = resolve
    confirmState.open = true
  })
}

export function answerConfirm(ok) {
  confirmState.open = false
  if (confirmState.resolve) confirmState.resolve(ok)
  confirmState.resolve = null
}
