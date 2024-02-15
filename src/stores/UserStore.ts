import { makeAutoObservable } from "mobx";

type User = {
  nickname: string;
  emial: string;
  socialType: string;
  profileImage: string;
};

class UserStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: User) {
    this.user = user;
  }
}

const userStore = new UserStore();
export default userStore;
