'use strict';

/**
 * toilet service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::toilet.toilet');
