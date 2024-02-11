import { useCallback } from "react";

interface StatusCodeProps {
    statusCode: number | null;
}

const StatusCode = (props: StatusCodeProps) => {

    const { statusCode } = props;

    const getStatusCodeColor = () => {
        if (!statusCode) return
        if (statusCode >= 200 && statusCode < 300) return "#35b729"  
        if (statusCode >= 300 && statusCode < 400) return "#5271ff"
        if (statusCode >= 400 && statusCode < 500) return "#ff5c5c"
        if (statusCode >= 500) return "#ffa200"
          
    };

    return (
        <h1 className="text-white m-2 py-1 px-2 rounded" style={{ backgroundColor: getStatusCodeColor() }}>
            {statusCode}
        </h1>
    )
}

export default StatusCode;