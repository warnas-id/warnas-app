//
//  i18n.js
//  warnasmobile
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import I18n from "i18n-js"
import en from "./en.json"
import id from "./id.json"

I18n.fallbacks = true
I18n.translations = { en, id }

export function strings(name, params = {}) {

	return I18n.t(name, params = {})
}
