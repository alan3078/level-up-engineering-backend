'use strict';

/**
 * living-room service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::living-room.living-room');
