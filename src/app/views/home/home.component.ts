import { Component, OnInit } from "@angular/core";
import { HearderService } from "src/app/components/template/header/hearder.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private headerService: HearderService) {
    headerService.headerData = {
      title: "Início",
      icon: "home",
      routeUrl: "",
    };
  }

  ngOnInit(): void {}
}
