import { Component, OnInit } from '@angular/core';
import {YoutubeService} from "../services/youtube.service";

@Component({
  selector: 'app-youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.css']
})
export class YoutubePlaylistComponent implements OnInit {

  listYoutube: any
  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.listYoutube = this.youtubeService.playlist;
  }

}
