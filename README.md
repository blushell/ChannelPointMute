## config.js explanation
- password: The obs-websocket password you set/that was generated
- token: See [token tutorial](https://github.com/Pentalex/ChannelPointMute/edit/main/README.md#token-tutorial)
- rewardName: The exact name of the channel point reward (case sensitive)
- time: Time per redemption that gets added to the timer
- source: The exact name of your microphone source in OBS (case sensitive)


## Token tutorial
To get a token:
1. Use the following URL
https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=f3l7ldc6zwtdunaoe53rzms4icn0pl&redirect_uri=https://twitchapps.com/tmi/&scope=channel:read:redemptions

2. Replace the token in config.json with the token WITHOUT "oauth:" 

