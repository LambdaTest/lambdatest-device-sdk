# Instructions

## Start backend server
Get the username and api key from [Accounts Page](https://accounts.lambdatest.com/security) and update username and apiKey variables in index.js file. Start the backend server using below command.
```bash
node index.js
```

Now backend is up and running on port 4000.


## Start frontend
```bash 
npm i -g serve
serve . -p 4000
```

Now backend is up and running on port 4000. Open http://localhost.lambdatest.com:4000 port to start testing.

# Device SDK Integration

Postman api collection - 
https://api.postman.com/collections/22615474-ede71faf-4483-42aa-b0d9-2e1e59881132?access_key=PMAT-01J55Q18Y5W835CMH13TN0GE12

## Generate one time session token

Generate a new one time session token from LambdaTest servers using **username and access key**.

You can find the access key and username on [Accounts Page](https://accounts.lambdatest.com/security)

Run the below command to generate token:

```bash
curl -u <USERNAME>:<ACCESS_KEY> -i -H 'Accept:application/json' https://manual-api.lambdatest.com/tests/generate-test-session-token
```

#### API response
```json
{
    "success": true,
    "message": "Test session token generated successfully.",
    "testSessionToken": "tst:2ff9e3ec6c753a1aaecac"
}
```

## Iframe integration

```javascript
<iframe src={"https://app.lambdatest.com?sessionToken=<TEST_SESSION_TOKEN>&device=<DEVICE_NAME>&osVersion=<OS_VERSION>&appUrl=" + appUrl + "&appLaunchParams="+encodeURIComponent(JSON.stringify({"AmsClientID":"","AmsClientSecret":"","AMSEnvironment":"live"}))} />
```

### Query params for iframe

| Key      | Type     | Value |
|----------|----------|----------|
| appUrl   | String   | This will donwload and launch the app on session start   |
| device   | String   | Name of the device to be launched. for example "iPhone 14 Pro Max"   |
| deviceType   | String   | Device type to be launched. for andoroid "emulator", for ios "simulator"   |
| osVersion   | String   | Name of the os version to be launched. for example "16.2"   |
| appLaunchParams   |  URL-Encoded JSON Object    | Params to be passed on app launch  |
| sessionToken  | String   | One time session token genrated from lambdatest server for authentication  |



## Device list

Run the below command to get the device list with supported os versions.
Send deviceType value "emulator" for android devices and "simulator" for ios devices. 

```bash
curl --location --request GET 'https://manual-api.lambdatest.com/ltms/device/list?deviceType=emulator' \
--header 'Authorization: Bearer <TEST_SESSION_TOKEN>' \
--data '{}'
```

#### API response
```json
{
    "success": true,
    "data": {
        "13.0": [
            {
                "deviceName": "Google Pixel 7 Pro",
                "deviceHeight": 3120,
                "deviceWidth": 1440
            },
            {
                "deviceName": "Google Pixel 7",
                "deviceHeight": 2400,
                "deviceWidth": 1080
            },
            {
                "deviceName": "Google Pixel 4XL",
                "deviceHeight": 1738,
                "deviceWidth": 822
            },
            {
                "deviceName": "Xiaomi Mi 11",
                "deviceHeight": 1994,
                "deviceWidth": 898
            },
        ]
    },
    ...
}
```


## Location list

Run the below command to get the list of supported locations

```bash
curl --location 'https://manual-api.lambdatest.com/ltms/locations' \
--header 'Authorization: Bearer <TEST_SESSION_TOKEN>
```

#### API response
```json
{
    "Africa & Middle East": [
        {
            "code": "IL",
            "name": "Israel",
            "label": "Africa & Middle East",
            "proxy_type": "GE"
        },
        {
            "code": "KW",
            "name": "Kuwait",
            "label": "Africa & Middle East",
            "proxy_type": "GE"
        },
        {
            "code": "MA",
            "name": "Morocco",
            "label": "Africa & Middle East",
            "proxy_type": "GE"
        },
        {
            "code": "NG",
            "name": "Nigeria",
            "label": "Africa & Middle East",
            "proxy_type": "GE"
        },
    ]
}
```

Run the below command to update location. 

```bash
curl --location --request PUT 'https://manual-api.lambdatest.com/tests/proxy' \
--header 'Authorization: Bearer <TEST_SESSION_TOKEN>' \
--header 'Content-Type: application/json' \
--data '{
    "country_code": "IL",
    "proxy_type": "GE",
    "name": "Israel"
}'
```


## Keyboard input list

Run the below command to get the list of supported keyboard input. From response use "mac_code" key's value for ios and "android_code" key's value for android keyboard input update.

```bash
curl --location 'https://manual-api.lambdatest.com/keyboard' \
--header 'Authorization: Bearer <TEST_SESSION_TOKEN>'
```

#### API response
```json
{
    "data": [
        {
            "id": 1,
            "name": "Belgian",
            "win_code": "fr-BE",
            "mac_code": "Belgian",     
            "android_code": "Belgian", 
            "status_ind": "active"
        },
        {
            "id": 2,
            "name": "Brazilian",
            "win_code": "pt-BR",
            "mac_code": "Brazilian",
            "android_code": "Brazilian",
            "status_ind": "active"
        },
        {
            "id": 3,
            "name": "British",
            "win_code": "en-GB",
            "mac_code": "British",
            "android_code": null,
            "status_ind": "active"
        },
    ]
}
```

Run the below command to update keyboard input. 

#### ANDROID
```bash
curl --location --request PUT 'https://manual-api.lambdatest.com/api-gateway/v1.0/api/language?type=data' \
--header 'Authorization: Bearer <TEST_SESSION_TOKEN>' \
--header 'Content-Type: application/json' \
--data '{
    "language": "Russian"
}'
```
#### IOS
```bash
curl --location --request PUT 'https://manual-api.lambdatest.com/api-gateway/v1.0/api/language?type=changeLang' \
--header 'Authorization: Bearer <TEST_SESSION_TOKEN>' \
--header 'Content-Type: application/json' \
--data '{
    "language": "Russian"
}'
```



## Video record

Run below command to start video recording. Pass name in body for generated video file.
```bash
curl --location 'https://manual-api.lambdatest.com/api-gateway/v1.0/api/videostream?type=start' \
--header 'Authorization: Bearer <TEST_SESSION_TOKEN>' \
--data '{
    "name": "sample-video"
}'
```

Run below command to stop video recording.

```bash
curl --location 'https://manual-api.lambdatest.com/api-gateway/v1.0/api/videostream?type=stop' \
--header 'Authorization: Bearer <TEST_SESSION_TOKEN>' \
--data '{}'
```

Run below command to download recorded video.

```bash
curl --location 'https://manual-api.lambdatest.com/tests/gallery' \
--header 'Authorization: Bearer <TEST_SESSION_TOKEN>'
```

Use video url from the api response to download recorded video.

```json
{
    "screenshots": [],
    "videos": [
        {
            "video_id": "VID1016061251691686917271441",
            "video_url": "https://content.lambdatest.com/883813/2023/08/10/TES1016061251691686761012590/video/17137/video.mp4?Expires=1691859773&Key-Pair-Id=K7CTX2VJ5JHSJ&Signature=YDd2~oWXXJ8whpeP8P8iEwJU0F12f9oqocBU8Q0ykD5BHRUOjsqzQhn47dqxf53EkGnmz",
            "start_timestamp": null,
            "end_timestamp": null,
            "duration": "00:00:16"
        }
    ]
}
```

## Device screenshot

Trigger below event on device iframe to capture device screenshot.
```javascript
document.getElementById("iframeId").contentWindow.postMessage({
    action: "screenshot"
}, "*")
```

## Stop test

Run below command to start video recording.
```bash
curl --location --request PUT 'https://manual-api.lambdatest.com/tests/stop' \
--header 'Authorization: Bearer <TEST_SESSION_TOKEN>' \
--data '{}'
```

## Idle Timeout

Run below command to update IDLE TIMEOUT. 
NOTE : Preference value can't be greater than 60 minutes
```bash
curl --location --request PUT 'https://manual-api.lambdatest.com/ltms/users/preferences/realtime' \
--header 'authorization: Bearer <TEST_SESSION_TOKEN>' \
--header 'content-type: application/json' \
--data '{
    "preference_key": "IDLE_TIMEOUT",
    "preference_value": 30
}'
```
