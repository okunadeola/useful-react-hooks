import { useRef, useState } from "react"
import useClickOutside from "./useClickOutside"

export default function ClickOutsideComponent() {
  const [open, setOpen] = useState(false)
  const modalRef = useRef()
  const triggerRef = useRef()

  useClickOutside(modalRef,triggerRef, () => {
    if (open) setOpen(false)
  })

  return (
    <>
      <button ref={triggerRef}  onClick={() => setOpen(true)}>Open</button>
      {
        open ? 
           ( <div
              ref={modalRef}
              style={{
                display: "block",
                backgroundColor: "white",
                boxShadow: '1px 2px 2px gray',
                color: "white",
                width: "400px",
                height: "200px",
                padding: "10px",
                borderRadius: "20px",
                position: "absolute",
                top: "20px",
                left: "calc(35% - 50px)"
              }}
            >
              <span style={{color: 'black'}}>Modal</span>
            </div>) : null
      }
    </>
  )
}
