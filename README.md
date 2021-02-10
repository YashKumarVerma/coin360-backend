# Coin 360

Backend to cache requests from bulky coin360 API to quickly visualize a dashboard and assist in polling updates.

## Requirements
Run the following command to start a redis server

```bash
 docker run -d --name some-redis -p 6379:6379 redis
```

## Design
![https://user-images.githubusercontent.com/14032427/107460284-d98e5580-6b7d-11eb-99a2-83ec5b0214da.jpg](https://user-images.githubusercontent.com/14032427/107460284-d98e5580-6b7d-11eb-99a2-83ec5b0214da.jpg)

## Disclaimer
The API used to fetch the data is property of coin360.
