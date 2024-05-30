import type { Schema, Attribute } from '@strapi/strapi';

export interface AuthAuth extends Schema.Component {
  collectionName: 'components_auth_auths';
  info: {
    displayName: 'Auth';
    icon: 'lock';
  };
  attributes: {
    username: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'auth.auth': AuthAuth;
    }
  }
}
