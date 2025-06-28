export interface MasterData {
  salutation: MasterList[];
  gender: MasterList[];
  interest: MasterList[];
  credential: MasterList[];
  addressType: MasterList[];
  country: MasterList[];
  state: MasterList[];
  city: MasterList[];
}

export interface MasterList {
  id: number;
  code: string;
  value: string;
}
