import AppContext from '@/context/AppContext';
import HttpService from '@/service/HttpService';
import React, { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import ModelCards from '../components/ModelCards';

const users = [
  {
    gender: 'female',
    name: {
      title: 'Miss',
      first: 'Adiles',
      last: 'Gonçalves',
    },
    location: {
      street: {
        number: 8710,
        name: 'Avenida D. Pedro Ii',
      },
      city: 'Boa Vista',
      state: 'Goiás',
      country: 'Brazil',
      postcode: 19977,
      coordinates: {
        latitude: '-18.8760',
        longitude: '68.1040',
      },
      timezone: {
        offset: '+9:00',
        description: 'Tokyo, Seoul, Osaka, Sapporo, Yakutsk',
      },
    },
    email: 'adiles.goncalves@example.com',
    login: {
      uuid: '083ed025-1fb7-45a0-ba98-a5fdab78e9c0',
      username: 'lazymouse416',
      password: 'midget',
      salt: '8UBvObpO',
      md5: 'b782252f293d972d7b5c2668064c406f',
      sha1: '37608a3f11e01f8e20ddd76694e69fda527c16c7',
      sha256:
        '51dcddef42e6121f6b0449fc2e718fa57e4db27dd23e241373605ac13937b557',
    },
    dob: {
      date: '1999-07-16T20:26:23.695Z',
      age: 23,
    },
    registered: {
      date: '2018-08-29T03:30:21.950Z',
      age: 4,
    },
    phone: '(64) 5857-0575',
    cell: '(09) 3692-4887',
    id: {
      name: 'CPF',
      value: '240.596.829-84',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/61.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/61.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/61.jpg',
    },
    nat: 'BR',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Denil',
      last: 'Caldeira',
    },
    location: {
      street: {
        number: 9177,
        name: 'Travessa dos Açorianos',
      },
      city: 'Itajaí',
      state: 'Rio Grande do Norte',
      country: 'Brazil',
      postcode: 60247,
      coordinates: {
        latitude: '13.5163',
        longitude: '87.9527',
      },
      timezone: {
        offset: '+5:45',
        description: 'Kathmandu',
      },
    },
    email: 'denil.caldeira@example.com',
    login: {
      uuid: '90e59f46-cdc3-4718-aad4-ed71241cef6b',
      username: 'goldenswan967',
      password: 'change',
      salt: '12tMQHCi',
      md5: 'a95933ec367e0badf92488f3bcff8bc6',
      sha1: '383d3d4397a489f6555b120a831a9a1c3246fcc0',
      sha256:
        '0aff6c6524bcb8535d9fcfcf02b16b6b9b71ba702d85d01aaf7b3269c4e16662',
    },
    dob: {
      date: '1950-03-15T06:41:47.214Z',
      age: 73,
    },
    registered: {
      date: '2018-07-27T12:11:26.238Z',
      age: 4,
    },
    phone: '(08) 8157-8153',
    cell: '(46) 2660-8474',
    id: {
      name: 'CPF',
      value: '502.518.149-61',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/61.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/61.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/61.jpg',
    },
    nat: 'BR',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Feliz',
      last: 'de Souza',
    },
    location: {
      street: {
        number: 9653,
        name: 'Rua Boa Vista ',
      },
      city: 'Cametá',
      state: 'Acre',
      country: 'Brazil',
      postcode: 75083,
      coordinates: {
        latitude: '10.4944',
        longitude: '121.9837',
      },
      timezone: {
        offset: '+3:00',
        description: 'Baghdad, Riyadh, Moscow, St. Petersburg',
      },
    },
    email: 'feliz.desouza@example.com',
    login: {
      uuid: 'd59b8723-4df1-4c90-8d29-bd2966a49a0c',
      username: 'greenbird670',
      password: 'mandrake',
      salt: 'kSwtaCqp',
      md5: '5d7eb9ae469e260f4d2ad66307f51823',
      sha1: '9fbd0463f82a6e59f9fe74164b4c2b61aca0228f',
      sha256:
        'a50ddfbf05ee2a6d5ec333f9e7d4b1372bacdad832f37ac9f5dc4accc94800d5',
    },
    dob: {
      date: '1954-06-17T07:41:23.705Z',
      age: 68,
    },
    registered: {
      date: '2006-01-10T06:30:17.517Z',
      age: 17,
    },
    phone: '(11) 1607-7723',
    cell: '(99) 2907-5620',
    id: {
      name: 'CPF',
      value: '237.422.098-00',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/72.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/72.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/72.jpg',
    },
    nat: 'BR',
  },
  {
    gender: 'female',
    name: {
      title: 'Ms',
      first: 'Airumã',
      last: 'Costa',
    },
    location: {
      street: {
        number: 9322,
        name: 'Rua São Francisco ',
      },
      city: 'Guarulhos',
      state: 'Goiás',
      country: 'Brazil',
      postcode: 15365,
      coordinates: {
        latitude: '-11.8477',
        longitude: '95.6992',
      },
      timezone: {
        offset: '-3:30',
        description: 'Newfoundland',
      },
    },
    email: 'airuma.costa@example.com',
    login: {
      uuid: '780492d2-6fb2-4c66-98f2-20b2b5507439',
      username: 'tinyzebra767',
      password: 'thewho',
      salt: 'fBwwYmSg',
      md5: '0b01c0038f7a905553fd313ef7497f0b',
      sha1: '138f69d891c62fd6952f667dccc7db56ca42b603',
      sha256:
        '04874061da0624d78a4ef33c3f0a7a72fcf3a9674b04e0b3f4c0cb26744e4f15',
    },
    dob: {
      date: '1956-05-13T20:23:39.349Z',
      age: 66,
    },
    registered: {
      date: '2018-10-15T20:18:03.132Z',
      age: 4,
    },
    phone: '(59) 9858-2857',
    cell: '(42) 1205-0685',
    id: {
      name: 'CPF',
      value: '239.629.326-70',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/93.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/93.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/93.jpg',
    },
    nat: 'BR',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Décimo',
      last: 'Moura',
    },
    location: {
      street: {
        number: 607,
        name: 'Rua Pará ',
      },
      city: 'Petrolina',
      state: 'Pernambuco',
      country: 'Brazil',
      postcode: 69055,
      coordinates: {
        latitude: '-21.7476',
        longitude: '-158.4435',
      },
      timezone: {
        offset: '+4:00',
        description: 'Abu Dhabi, Muscat, Baku, Tbilisi',
      },
    },
    email: 'decimo.moura@example.com',
    login: {
      uuid: 'a23b223a-1ccb-436e-a3f1-b8a3035c7331',
      username: 'sadsnake543',
      password: 'tigers1',
      salt: 'mPsV7iaz',
      md5: '9cf1cc449fa278d3ce7adfb36fa7b644',
      sha1: 'd5c3d90ee6ef6f60cbad789e0c8887d6ebf169f2',
      sha256:
        '489ba8ca00b3e9c519256b4cd78b50a6a760e7749c69bf5c0954b69fd3080b88',
    },
    dob: {
      date: '1972-05-17T09:21:01.378Z',
      age: 50,
    },
    registered: {
      date: '2006-07-08T09:22:35.234Z',
      age: 16,
    },
    phone: '(71) 4613-9282',
    cell: '(23) 5341-3177',
    id: {
      name: 'CPF',
      value: '340.635.075-47',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/14.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/14.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/14.jpg',
    },
    nat: 'BR',
  },
  {
    gender: 'female',
    name: {
      title: 'Ms',
      first: 'Laís',
      last: 'Pinto',
    },
    location: {
      street: {
        number: 6016,
        name: 'Rua São Pedro ',
      },
      city: 'Belo Horizonte',
      state: 'Amazonas',
      country: 'Brazil',
      postcode: 61814,
      coordinates: {
        latitude: '89.5200',
        longitude: '126.0302',
      },
      timezone: {
        offset: '+7:00',
        description: 'Bangkok, Hanoi, Jakarta',
      },
    },
    email: 'lais.pinto@example.com',
    login: {
      uuid: '10ec02f5-eb55-4017-95d3-b1eefb3df8ee',
      username: 'goldendog863',
      password: 'tigger1',
      salt: 'vZfr0ap8',
      md5: 'dfc03868e14b81254019832157062138',
      sha1: '383651a3d11b31e25fdf5a85dbbe6f8c38e89e3b',
      sha256:
        '094fabb4cabcad67e4dffaa1ea306a011d50c00e12ab831a6445f9d7dc046e8e',
    },
    dob: {
      date: '1969-07-30T05:11:41.970Z',
      age: 53,
    },
    registered: {
      date: '2021-04-17T02:06:01.366Z',
      age: 1,
    },
    phone: '(95) 4448-7555',
    cell: '(03) 3192-3152',
    id: {
      name: 'CPF',
      value: '479.674.449-97',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/31.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/31.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/31.jpg',
    },
    nat: 'BR',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Argentino',
      last: 'Jesus',
    },
    location: {
      street: {
        number: 5325,
        name: 'Rua São Paulo ',
      },
      city: 'Birigüi',
      state: 'Tocantins',
      country: 'Brazil',
      postcode: 12465,
      coordinates: {
        latitude: '54.8472',
        longitude: '13.5696',
      },
      timezone: {
        offset: '+9:00',
        description: 'Tokyo, Seoul, Osaka, Sapporo, Yakutsk',
      },
    },
    email: 'argentino.jesus@example.com',
    login: {
      uuid: 'e4d8b631-4080-4ac8-84f9-3f63ab0414a9',
      username: 'lazywolf435',
      password: 'isaiah',
      salt: 'N7Bp12x6',
      md5: 'fb53b50ef7c100d268bc3f39cab3d6d4',
      sha1: '4928549b6aeddd8e6dec824568d34b2441bfde27',
      sha256:
        'fbb5fc7220c01ed0f4f5edce844d7963f18f6ad8d41acdc95099796772a27d59',
    },
    dob: {
      date: '1980-12-11T12:11:23.623Z',
      age: 42,
    },
    registered: {
      date: '2016-06-10T02:10:07.551Z',
      age: 6,
    },
    phone: '(12) 1252-0103',
    cell: '(49) 3905-0871',
    id: {
      name: 'CPF',
      value: '015.326.503-43',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/25.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/25.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/25.jpg',
    },
    nat: 'BR',
  },
];

export default function Usuarios() {
  const httpService = new HttpService();

  const { setIsLoading, isLoading } = useContext(AppContext);

  // const { data, isLoading: loading } = useQuery(['fetchUsers'], () =>
  //   httpService.get()
  // );

  // useEffect(() => {
  //   setIsLoading(loading);
  // }, [loading, setIsLoading]);

  return (
    <ul className="flex gap-2 flex-wrap h-fit items-center justify-center">
      {users.map((user) => {
        return <ModelCards key={user.id.value} user={user} />;
      })}
    </ul>
  );
}
