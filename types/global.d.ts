interface IResponse {
  items: IBallotGroup[];
}

interface IBallot {
  id: string;
  photoUrL: string;
  title: string;
}

interface IBallotGroup {
  id: string;
  items: IBallot[];
  title: string;
}

interface ISelectedBallotGroup {
  [key: string]: string;
}