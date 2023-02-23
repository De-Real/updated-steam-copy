
# Steam copy app

It's an educational project that show primitive steam copy, where user can find certain games, sort them using different parameters, add games to like list. Also, detailed information about app can be provided. 


## Demo

Deployed version of this project you can see here https://de-real.github.io/updated-steam-copy/


## Technologies

This project was created using this stack of technologies:

- React
- TypeScript
- Redux (Redux TK)
- React Router (6.4+ using new version features)
- MaterialUI

Steam API used in this project: https://rapidapi.com/psimavel/api/steam2/


## Details

Steam copy app was created using external API, so most of unproper work are caused by API organization and its work. Some clarification:

* API is responsible for searching games, so client only send searching parameters and server return found games. This means that incorrection of returning game is the problem of API;
* A lot of games are sent without own ID, so it's impossible to provide for them proper work (i.e. add them to like list or show details);
* Amount of possible requests is strongly limited, no more than 10 request per minute allowed
* Most of user cases was tested manually, but some bugs can occured
* After loading some styles can disappear, it caused by Github Pages and can be fixed by developer

P.S. Bug when user can't return from app details using built browser navigation is known and is currently fixing. If bug still exist and you know how to fix it you can contact me: vinarchuk.a.v@gmail.com
## Authors

Created by Andrii Vynarchuk
- [@de-real](https://github.com/De-Real)


## Running

Project was created using Create-React-App template

To run this project run

```bash
  npm start
```

To build this project run

```bash
  npm run build
```

