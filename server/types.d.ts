type User= {
   room : string ,
   id : string , 
   name: string ,
} 

type ClientToServerEvents = {
  hello: () => void;
}
type ServerToClientEvents =  {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

type InterServerEvents = {
  ping: () => void;
}

type SocketData = {
  name: string;
  age: number;
}

export {User, ClientToServerEvents , ServerToClientEvents , InterServerEvents , SocketData }
