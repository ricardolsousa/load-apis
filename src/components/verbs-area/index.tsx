import React from "react"

const VerbsArea = () => {

    return (
        <div className="flex justify-center w-full border-b" style={{ borderColor: "#5f5f5f" }}>
        <div className="w-5/6 flex justify-between my-3">
          <div className="flex">
            {/* GET */}
            <div className="mr-1 py-0.5 px-2 rounded font-medium" style={{ backgroundColor: "#ece7ff" }}>
              <button style={{ color: "#5628ac" }}>GET</button>
            </div>

            {/* POST */}
            <div className="mr-1 py-0.5 px-2 rounded font-medium" style={{ backgroundColor: "#c1ffe5" }}>
              <button style={{ color: "#196445" }}>POST</button>
            </div>

            {/* PUT */}
            <div className="mr-1 py-0.5 px-2 rounded font-medium" style={{ backgroundColor: "#d1efff" }}>
              <button style={{ color: "#2537a8" }}>PUT</button>
            </div>

            {/* PATCH */}
            <div className="mr-1 py-0.5 px-2 rounded font-medium" style={{ backgroundColor: "#fdf5c7" }}>
              <button style={{ color: "#a44614" }}>PATCH</button>
            </div>

            {/* DELETE */}
            <div className="mr-1 py-0.5 px-2 rounded font-medium" style={{ backgroundColor: "#ffe0e0" }}>
              <button style={{ color: "#851d29" }}>DELETE</button>
            </div>
          </div>
          <div>
            {/* Limpar */}
            <div className="mr-1 py-0.5 px-2 rounded font-medium" style={{ backgroundColor: "#191f27" }}>
              <button style={{ color: "#51575e" }}>Limpar</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default VerbsArea;