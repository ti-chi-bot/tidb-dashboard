/* tslint:disable */
/* eslint-disable */
/**
 * Dashboard API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DecoratorLabelKey } from './decorator-label-key';

/**
 * 
 * @export
 * @interface MatrixMatrix
 */
export interface MatrixMatrix {
    /**
     * 
     * @type {{ [key: string]: Array<Array<number>>; }}
     * @memberof MatrixMatrix
     */
    'data': { [key: string]: Array<Array<number>>; };
    /**
     * 
     * @type {Array<DecoratorLabelKey>}
     * @memberof MatrixMatrix
     */
    'keyAxis': Array<DecoratorLabelKey>;
    /**
     * 
     * @type {Array<number>}
     * @memberof MatrixMatrix
     */
    'timeAxis': Array<number>;
}

