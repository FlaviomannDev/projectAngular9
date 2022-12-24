import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HearderData } from "./header-data.module";

@Injectable({
  providedIn: "root",
})
export class HearderService {
  private _headerData = new BehaviorSubject<HearderData>({
    title: "Início",
    icon: "home",
    routeUrl: "",
  });

  constructor() {}

  get headerData(): HearderData {
    return this._headerData.value;
  }

  set headerData(hearderData: HearderData) {
    this._headerData.next(hearderData);
  }
}
