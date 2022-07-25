// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  data: object;
};

const listOfVin = [
  {
    vin: "001",
    name: "avalon",
    th: "1996",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/TOYOTA_AVALON_China_%28cropped%29.jpg/1599px-TOYOTA_AVALON_China_%28cropped%29.jpg",
  },
  {
    vin: "002",
    name: "century",
    th: "1967",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Toyota_Century_3rd_generation_2017_Tokyo_Motor_Show_front_1_%28cropped%29.jpg/400px-Toyota_Century_3rd_generation_2017_Tokyo_Motor_Show_front_1_%28cropped%29.jpg",
  },
  {
    vin: "003",
    name: "GR Corolla",
    th: "2022",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/2023_Toyota_GR_Corolla%2C_front_NYIAS_2022.jpg/400px-2023_Toyota_GR_Corolla%2C_front_NYIAS_2022.jpg",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { query } = req;
    const cars = listOfVin.find((item) => item?.vin === query?.vin);
    if (cars) {
      res.status(200).send({
        message: 'success',
        data: cars});
    } else {
      res.status(400).send({
        message: 'please input correctly vin',
        data: {}
      });
    }     
}
