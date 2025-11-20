import { useCallback, useEffect, useState } from "react"
import { useSocket } from "../context /socketProvider";
import { useNavigate } from "react-router-dom";

const Lobby = () => {

  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const navigate = useNavigate();

  /*socket from context api*/
  const socket = useSocket();

  const submitHandle = useCallback((e) => {
    e.preventDefault();
    socket.emit("room:join", { email, room });

    navigate(`/room/${room}`);
  }, [email, room, socket, navigate])

  const handleJoinRoom = useCallback((data) => {
    const { email, room } = data;
    console.log(email, room);
  }, [])

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off('room:join', handleJoinRoom);
    }
  }, [socket], handleJoinRoom)


  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] p-4">
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/10">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Join Room
          </h2>

          <form onSubmit={submitHandle} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-1 font-medium">
                Email ID
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
              text-white placeholder-gray-400 focus:outline-none focus:ring-2 
              focus:ring-[#06b6d4] transition"
              />
            </div>

            {/* Room Number */}
            <div>
              <label htmlFor="roomnum" className="block text-gray-300 mb-1 font-medium">
                Room Number
              </label>
              <input
                id="roomnum"
                type="text"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                placeholder="Enter room number"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
              text-white placeholder-gray-400 focus:outline-none focus:ring-2 
              focus:ring-[#9333ea] transition"
              />
            </div>

            {/* Submit Button */}
            <button
              className="w-full py-3 rounded-xl font-semibold text-white 
            bg-gradient-to-r from-[#4f46e5] via-[#9333ea] to-[#06b6d4]
            hover:opacity-90 transition shadow-lg"
            >
              Join Now
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Lobby
