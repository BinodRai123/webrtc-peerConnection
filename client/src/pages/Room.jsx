import { useCallback, useEffect, useState } from "react";
import { useSocket } from "../context /socketProvider";

const Room = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState(null)

  const handleUserJoinRoom = useCallback(({ email, id }) => {
    console.log(`this ${email} user is joined in the room`);

    setRemoteSocketId(id);
  }, []);

  /*--- video call button ---*/
  const handleCallUser = useCallback(async () => {
    const localStream = await navigator.mediaDevices.getUserMedia({audio: true, video: true });
    setMyStream(localStream);
  }, [])

  useEffect(() => {
    socket.on("user:join", handleUserJoinRoom);

    return () => {
      socket.off("user:join", handleUserJoinRoom);
    };
  }, [socket, handleUserJoinRoom]);

  return <>
  <h1>page</h1>
  <h3>{remoteSocketId ? "Connected" : "no on in the room" }</h3>
  {remoteSocketId && <button onClick={handleCallUser} className="px-6 py-2 bg-gray-500">Call</button>}
  </>;
};

export default Room;
