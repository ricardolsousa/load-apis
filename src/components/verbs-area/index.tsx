import React, { useContext } from "react"
import VerbsButton from "./components/verbs-button";
import axios from "axios";
import { ApiDataContext } from "../../contexts/DataProvider";

const VerbsArea = () => {

  const { updateApiData } = useContext(ApiDataContext);

  return (
    <div className="flex justify-center w-full border-b" style={{ borderColor: "#5f5f5f" }}>
      <div className="w-5/6 flex justify-between my-3">
        <div className="flex">
          {/* GET */}
          <VerbsButton
            text={'GET'}
            color={"#5628ac"}
            backgroundColor={"#ece7ff"}
            onClick={() => axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
                updateApiData({ 
                  data: response?.data, 
                  headers: response?.headers, 
                  configs: response?.config,
                  statusCode: response?.status 
                })
              }).catch((error) => {
                updateApiData({ 
                  data: error?.message, 
                  headers: error?.config.headers,
                  configs: error?.config,
                  statusCode: error?.response.status 
                })
              })
            }
          />

          {/* POST */}
          <VerbsButton
            text={'POST'}
            color={"#196445"}
            backgroundColor={"#c1ffe5"}
            onClick={() => axios.post('https://jsonplaceholder.typicode.com/posts', {
              title: 'Teste',
              body: 'api',
              userId: 1,
            }, {
              headers: {
                'Content-Type': 'application/json; charset=UTF-8'
              }
            }).then((response) => {
                updateApiData({ 
                  data: response?.data, 
                  headers: response?.headers, 
                  configs: response?.config,
                  statusCode: response?.status 
                })
              }).catch((error) => updateApiData({ 
                data: error?.message,
                headers: error?.config.headers,
                configs: error?.config,
                statusCode: error?.response.status 
              }))
            }
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