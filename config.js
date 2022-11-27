const Config = {
    // The password the OBS websocket settings you set up.
    "password": "placeholder",

    /*
    Use the following URL to get the token:
    https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=f3l7ldc6zwtdunaoe53rzms4icn0pl&redirect_uri=https://twitchapps.com/tmi/&scope=channel:read:redemptions
    Only paste the string of characters AFTER the 'oauth:' part.
    */
    "token": "placeholder token", 

    // The name of the reward in Twitch (must be exact. case sensitive.)
    "rewardName": "Mute Streamer",

    // The time per redeem to be muted for.
    "time": "15",

    // The name of the source to mute in OBS.
    "source": "Mic/Aux"
};