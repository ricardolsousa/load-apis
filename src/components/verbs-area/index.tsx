import React from "react"
import VerbsButton from "./components/verbs-button";
import axios from "axios";

interface VerbsAreaProps {
  setData: (data: any) => void;
  setHeaders: (headers: any) => void;
}

const VerbsArea = (props: VerbsAreaProps) => {

  const { setData, setHeaders } = props;

  return (
    <div className="flex justify-center w-full border-b" style={{ borderColor: "#5f5f5f" }}>
      <div className="w-5/6 flex justify-between my-3">
        <div className="flex">
          {/* GET */}
          <VerbsButton
            text={'GET'}
            color={"#5628ac"}
            backgroundColor={"#ece7ff"}
            onClick={() => axios.get('https://api.publicapis.org/entries').then((response) => {
              setData(response?.data)
              setHeaders(response?.headers)
            })}
          />

          {/* POST */}
          <VerbsButton
            text={'POST'}
            color={"#196445"}
            backgroundColor={"#c1ffe5"}
          />

          {/* PUT */}
          <VerbsButton
            text={'PUT'}
            color={"#2537a8"}
            backgroundColor={"#d1efff"}
          />

          {/* PATCH */}
          <VerbsButton
            text={'PATCH'}
            color={"#a44614"}
            backgroundColor={"#fdf5c7"}
          />

          {/* DELETE */}
          <VerbsButton
            text={'DELETE'}
            color={"#851d29"}
            backgroundColor={"#ffe0e0"}
          />
        </div>
        <div>
          {/* Limpar */}
          <VerbsButton
            text={'Limpar'}
            color={"#51575e"}
            backgroundColor={"#191f27"}
          />
        </div>
      </div>
    </div>
  )
}

export default VerbsArea;