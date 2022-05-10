import customProtocolDetection from 'custom-protocol-detection';

const protoDetectTimeouts = {
    chromeAndIOS: 2500,
    legacyIE:     2500,
    safari:       2500
}

const finsurl = 'fins://cdn.openfin.co/process-manager/app.json';

window.addEventListener("DOMContentLoaded",  async () => {

    try {
        customProtocolDetection(finsurl, () => {
            console.log(`fins test failed, application ${finsurl}.`);
        }, () => {
            console.log(`fins test success, application ${finsurl}.`);
        }, () => {
            console.log(`fins test unsupported, application ${finsurl}.`);
        }, protoDetectTimeouts);
    } catch(e) {
        console.error(`error running fins protocol`, e)
    }

});