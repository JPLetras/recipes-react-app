export type AppState = {
  lightMode: boolean;
};

export type AppAction = {
  type: string;
};

export interface AppContextModel extends AppState {
  dispatch: React.Dispatch<AppAction>;
}
