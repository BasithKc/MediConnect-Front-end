import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function roomId(len: number) {
  let result= ""
  if(result) return result

  const chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP'
  const maxPos= chars.length

  len = len || 5
  for(let i=0; i<len; i++) {
    result+=chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return result
}
@Component({
  selector: 'app-video-room',
  templateUrl: './room-component.html'
})

export class VideoRoomComponent implements OnInit, AfterViewInit{
  @ViewChild('root')
  root!: ElementRef;

  roomId: string= roomId(5);

  constructor (private route: ActivatedRoute) {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // generate Kit Token
    const appID = 1349176270;
    const serverSecret = "501e42607c88e3d677989733c6b85301";

    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, this.roomId, Date.now().toString(), 'User');

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    const currentUrl = new URL(window.location.href)
    currentUrl.searchParams.set(`roomID`, this.roomId)
    zp.joinRoom({
      container: this.root.nativeElement,
      sharedLinks: [
        {
          name: 'Personal link',
          url: currentUrl.toString()
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    })
  }
}
