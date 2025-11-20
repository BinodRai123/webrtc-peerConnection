const JoinRoomForm = memo(function JoinRoomForm({ submitHandle }) {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  return (
    <form onSubmit={(e)=>submitHandle(e, email, room)} className="space-y-5">
      {/* Email */}
      <label htmlFor="email" className="block text-gray-300 mb-1 font-medium">
        Email ID
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="w-full px-4 py-3 rounded-xl bg-white/5 border-white/10 
        text-white placeholder-gray-400"
      />

      {/* Room Number */}
      <label htmlFor="roomnum" className="block text-gray-300 mb-1 font-medium">
        Room Number
      </label>
      <input
        id="roomnum"
        type="text"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        placeholder="Enter room number"
        required
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
        text-white"
      />

      <button
        className="w-full py-3 rounded-xl font-semibold text-white 
        bg-gradient-to-r from-[#4f46e5] via-[#9333ea] to-[#06b6d4]
        hover:opacity-90 transition shadow-lg"
      >
        Join Now
      </button>
    </form>
  );
});