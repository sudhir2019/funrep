import io from 'socket.io-client';

const socketinstance = "https://api.singhjyotiadmin.life";
const socket = io(socketinstance, { withCredentials: true });
export default socket;