
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  'AboutBluePrintSection': typeof import("../../app/components/About/BluePrintSection.vue")['default']
  'AboutHeroAboutSection': typeof import("../../app/components/About/HeroAboutSection.vue")['default']
  'AboutIntro': typeof import("../../app/components/About/Intro.vue")['default']
  'AboutPilaresSection': typeof import("../../app/components/About/PilaresSection.vue")['default']
  'AboutSloganSection': typeof import("../../app/components/About/SloganSection.vue")['default']
  'AboutTriadeSection': typeof import("../../app/components/About/TriadeSection.vue")['default']
  'AboutCtaSection': typeof import("../../app/components/About/ctaSection.vue")['default']
  'ContactHeroSection': typeof import("../../app/components/Contact/HeroSection.vue")['default']
  'ContactMapSection': typeof import("../../app/components/Contact/MapSection.vue")['default']
  'IndexAboutSection': typeof import("../../app/components/Index/AboutSection.vue")['default']
  'IndexHeroSection': typeof import("../../app/components/Index/HeroSection.vue")['default']
  'IndexSectoresSection': typeof import("../../app/components/Index/SectoresSection.vue")['default']
  'IndexServicesSection': typeof import("../../app/components/Index/ServicesSection.vue")['default']
  'IndexStatusSection': typeof import("../../app/components/Index/StatusSection.vue")['default']
  'IndexCtaSection': typeof import("../../app/components/Index/ctaSection.vue")['default']
  'ServicesHeroSection': typeof import("../../app/components/Services/HeroSection.vue")['default']
  'ServicesSection': typeof import("../../app/components/Services/ServicesSection.vue")['default']
  'ServicesCtaSection': typeof import("../../app/components/Services/ctaSection.vue")['default']
  'ElementosFooter': typeof import("../../app/components/elementos/Footer.vue")['default']
  'ElementosHeader': typeof import("../../app/components/elementos/Header.vue")['default']
  'IndustriesHeroSection': typeof import("../../app/components/industries/HeroSection.vue")['default']
  'IndustriesSection': typeof import("../../app/components/industries/Section.vue")['default']
  'IndustriesCtaSection': typeof import("../../app/components/industries/ctaSection.vue")['default']
  'ScriptGoogleMapsDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMaps.d.vue")['default']
  'ScriptGoogleMaps': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMaps.vue")['default']
  'ScriptGoogleMapsAdvancedMarkerElementDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsAdvancedMarkerElement.d.vue")['default']
  'ScriptGoogleMapsAdvancedMarkerElement': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsAdvancedMarkerElement.vue")['default']
  'ScriptGoogleMapsCircleDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsCircle.d.vue")['default']
  'ScriptGoogleMapsCircle': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsCircle.vue")['default']
  'ScriptGoogleMapsHeatmapLayerDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsHeatmapLayer.d.vue")['default']
  'ScriptGoogleMapsHeatmapLayer': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsHeatmapLayer.vue")['default']
  'ScriptGoogleMapsInfoWindowDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsInfoWindow.d.vue")['default']
  'ScriptGoogleMapsInfoWindow': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsInfoWindow.vue")['default']
  'ScriptGoogleMapsMarkerDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsMarker.d.vue")['default']
  'ScriptGoogleMapsMarker': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsMarker.vue")['default']
  'ScriptGoogleMapsMarkerClustererDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsMarkerClusterer.d.vue")['default']
  'ScriptGoogleMapsMarkerClusterer': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsMarkerClusterer.vue")['default']
  'ScriptGoogleMapsPinElementDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsPinElement.d.vue")['default']
  'ScriptGoogleMapsPinElement': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsPinElement.vue")['default']
  'ScriptGoogleMapsPolygonDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsPolygon.d.vue")['default']
  'ScriptGoogleMapsPolygon': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsPolygon.vue")['default']
  'ScriptGoogleMapsPolylineDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsPolyline.d.vue")['default']
  'ScriptGoogleMapsPolyline': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsPolyline.vue")['default']
  'ScriptGoogleMapsRectangleDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsRectangle.d.vue")['default']
  'ScriptGoogleMapsRectangle': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsRectangle.vue")['default']
  'ScriptAriaLoadingIndicatorDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.d.vue")['default']
  'ScriptAriaLoadingIndicator': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.vue")['default']
  'ScriptCarbonAdsDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCarbonAds.d.vue")['default']
  'ScriptCarbonAds': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCarbonAds.vue")['default']
  'ScriptCrispDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCrisp.d.vue")['default']
  'ScriptCrisp': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCrisp.vue")['default']
  'ScriptGoogleAdsenseDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleAdsense.d.vue")['default']
  'ScriptGoogleAdsense': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleAdsense.vue")['default']
  'ScriptIntercomDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptIntercom.d.vue")['default']
  'ScriptIntercom': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptIntercom.vue")['default']
  'ScriptLemonSqueezyDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLemonSqueezy.d.vue")['default']
  'ScriptLemonSqueezy': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLemonSqueezy.vue")['default']
  'ScriptLoadingIndicatorDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLoadingIndicator.d.vue")['default']
  'ScriptLoadingIndicator': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLoadingIndicator.vue")['default']
  'ScriptPayPalButtonsDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptPayPalButtons.d.vue")['default']
  'ScriptPayPalButtons': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptPayPalButtons.vue")['default']
  'ScriptPayPalMarksDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptPayPalMarks.d.vue")['default']
  'ScriptPayPalMarks': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptPayPalMarks.vue")['default']
  'ScriptPayPalMessagesDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptPayPalMessages.d.vue")['default']
  'ScriptPayPalMessages': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptPayPalMessages.vue")['default']
  'ScriptStripePricingTableDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptStripePricingTable.d.vue")['default']
  'ScriptStripePricingTable': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptStripePricingTable.vue")['default']
  'ScriptVimeoPlayerDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptVimeoPlayer.d.vue")['default']
  'ScriptVimeoPlayer': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptVimeoPlayer.vue")['default']
  'ScriptYouTubePlayerDVue': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.d.vue")['default']
  'ScriptYouTubePlayer': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.vue")['default']
  'NuxtWelcome': typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  'NuxtLayout': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  'NuxtErrorBoundary': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  'ClientOnly': typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  'DevOnly': typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  'ServerPlaceholder': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  'NuxtLink': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  'NuxtLoadingIndicator': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  'NuxtTime': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  'NuxtImg': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  'NuxtPicture': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  'NuxtPage': typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  'NoScript': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  'Link': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  'Base': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  'Title': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  'Meta': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  'Style': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  'Head': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  'Html': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  'Body': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  'NuxtIsland': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  'LazyAboutBluePrintSection': LazyComponent<typeof import("../../app/components/About/BluePrintSection.vue")['default']>
  'LazyAboutHeroAboutSection': LazyComponent<typeof import("../../app/components/About/HeroAboutSection.vue")['default']>
  'LazyAboutIntro': LazyComponent<typeof import("../../app/components/About/Intro.vue")['default']>
  'LazyAboutPilaresSection': LazyComponent<typeof import("../../app/components/About/PilaresSection.vue")['default']>
  'LazyAboutSloganSection': LazyComponent<typeof import("../../app/components/About/SloganSection.vue")['default']>
  'LazyAboutTriadeSection': LazyComponent<typeof import("../../app/components/About/TriadeSection.vue")['default']>
  'LazyAboutCtaSection': LazyComponent<typeof import("../../app/components/About/ctaSection.vue")['default']>
  'LazyContactHeroSection': LazyComponent<typeof import("../../app/components/Contact/HeroSection.vue")['default']>
  'LazyContactMapSection': LazyComponent<typeof import("../../app/components/Contact/MapSection.vue")['default']>
  'LazyIndexAboutSection': LazyComponent<typeof import("../../app/components/Index/AboutSection.vue")['default']>
  'LazyIndexHeroSection': LazyComponent<typeof import("../../app/components/Index/HeroSection.vue")['default']>
  'LazyIndexSectoresSection': LazyComponent<typeof import("../../app/components/Index/SectoresSection.vue")['default']>
  'LazyIndexServicesSection': LazyComponent<typeof import("../../app/components/Index/ServicesSection.vue")['default']>
  'LazyIndexStatusSection': LazyComponent<typeof import("../../app/components/Index/StatusSection.vue")['default']>
  'LazyIndexCtaSection': LazyComponent<typeof import("../../app/components/Index/ctaSection.vue")['default']>
  'LazyServicesHeroSection': LazyComponent<typeof import("../../app/components/Services/HeroSection.vue")['default']>
  'LazyServicesSection': LazyComponent<typeof import("../../app/components/Services/ServicesSection.vue")['default']>
  'LazyServicesCtaSection': LazyComponent<typeof import("../../app/components/Services/ctaSection.vue")['default']>
  'LazyElementosFooter': LazyComponent<typeof import("../../app/components/elementos/Footer.vue")['default']>
  'LazyElementosHeader': LazyComponent<typeof import("../../app/components/elementos/Header.vue")['default']>
  'LazyIndustriesHeroSection': LazyComponent<typeof import("../../app/components/industries/HeroSection.vue")['default']>
  'LazyIndustriesSection': LazyComponent<typeof import("../../app/components/industries/Section.vue")['default']>
  'LazyIndustriesCtaSection': LazyComponent<typeof import("../../app/components/industries/ctaSection.vue")['default']>
  'LazyScriptGoogleMapsDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMaps.d.vue")['default']>
  'LazyScriptGoogleMaps': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMaps.vue")['default']>
  'LazyScriptGoogleMapsAdvancedMarkerElementDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsAdvancedMarkerElement.d.vue")['default']>
  'LazyScriptGoogleMapsAdvancedMarkerElement': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsAdvancedMarkerElement.vue")['default']>
  'LazyScriptGoogleMapsCircleDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsCircle.d.vue")['default']>
  'LazyScriptGoogleMapsCircle': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsCircle.vue")['default']>
  'LazyScriptGoogleMapsHeatmapLayerDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsHeatmapLayer.d.vue")['default']>
  'LazyScriptGoogleMapsHeatmapLayer': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsHeatmapLayer.vue")['default']>
  'LazyScriptGoogleMapsInfoWindowDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsInfoWindow.d.vue")['default']>
  'LazyScriptGoogleMapsInfoWindow': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsInfoWindow.vue")['default']>
  'LazyScriptGoogleMapsMarkerDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsMarker.d.vue")['default']>
  'LazyScriptGoogleMapsMarker': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsMarker.vue")['default']>
  'LazyScriptGoogleMapsMarkerClustererDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsMarkerClusterer.d.vue")['default']>
  'LazyScriptGoogleMapsMarkerClusterer': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsMarkerClusterer.vue")['default']>
  'LazyScriptGoogleMapsPinElementDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsPinElement.d.vue")['default']>
  'LazyScriptGoogleMapsPinElement': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsPinElement.vue")['default']>
  'LazyScriptGoogleMapsPolygonDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsPolygon.d.vue")['default']>
  'LazyScriptGoogleMapsPolygon': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsPolygon.vue")['default']>
  'LazyScriptGoogleMapsPolylineDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsPolyline.d.vue")['default']>
  'LazyScriptGoogleMapsPolyline': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsPolyline.vue")['default']>
  'LazyScriptGoogleMapsRectangleDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsRectangle.d.vue")['default']>
  'LazyScriptGoogleMapsRectangle': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/GoogleMaps/ScriptGoogleMapsRectangle.vue")['default']>
  'LazyScriptAriaLoadingIndicatorDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.d.vue")['default']>
  'LazyScriptAriaLoadingIndicator': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.vue")['default']>
  'LazyScriptCarbonAdsDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCarbonAds.d.vue")['default']>
  'LazyScriptCarbonAds': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCarbonAds.vue")['default']>
  'LazyScriptCrispDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCrisp.d.vue")['default']>
  'LazyScriptCrisp': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCrisp.vue")['default']>
  'LazyScriptGoogleAdsenseDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleAdsense.d.vue")['default']>
  'LazyScriptGoogleAdsense': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleAdsense.vue")['default']>
  'LazyScriptIntercomDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptIntercom.d.vue")['default']>
  'LazyScriptIntercom': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptIntercom.vue")['default']>
  'LazyScriptLemonSqueezyDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLemonSqueezy.d.vue")['default']>
  'LazyScriptLemonSqueezy': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLemonSqueezy.vue")['default']>
  'LazyScriptLoadingIndicatorDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLoadingIndicator.d.vue")['default']>
  'LazyScriptLoadingIndicator': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLoadingIndicator.vue")['default']>
  'LazyScriptPayPalButtonsDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptPayPalButtons.d.vue")['default']>
  'LazyScriptPayPalButtons': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptPayPalButtons.vue")['default']>
  'LazyScriptPayPalMarksDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptPayPalMarks.d.vue")['default']>
  'LazyScriptPayPalMarks': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptPayPalMarks.vue")['default']>
  'LazyScriptPayPalMessagesDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptPayPalMessages.d.vue")['default']>
  'LazyScriptPayPalMessages': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptPayPalMessages.vue")['default']>
  'LazyScriptStripePricingTableDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptStripePricingTable.d.vue")['default']>
  'LazyScriptStripePricingTable': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptStripePricingTable.vue")['default']>
  'LazyScriptVimeoPlayerDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptVimeoPlayer.d.vue")['default']>
  'LazyScriptVimeoPlayer': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptVimeoPlayer.vue")['default']>
  'LazyScriptYouTubePlayerDVue': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.d.vue")['default']>
  'LazyScriptYouTubePlayer': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.vue")['default']>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  'LazyClientOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  'LazyDevOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  'LazyNoScript': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  'LazyLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  'LazyBase': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  'LazyTitle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  'LazyMeta': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  'LazyStyle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  'LazyHead': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  'LazyHtml': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  'LazyBody': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
