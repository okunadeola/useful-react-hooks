
import useEventListener from "../13-useEventListener/useEventListener"

export default function useClickOutside(ref, triggerRef,  cb) {
  useEventListener(
    "click",
    e => {
      if (ref.current == null || ref.current.contains(e.target) || triggerRef.current == null || triggerRef.current.contains(e.target)) return
      cb(e)
    },
    document
  )
}
