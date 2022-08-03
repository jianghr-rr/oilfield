'use strict';

// from publish-please

const path = require('path');
const writeFile = require('fs').writeFileSync;
const chalk = require('chalk');
const getNpmArgs = require('./utils/get-npm-args');

const pathJoin = path.join;

function reportNoConfig() {
    console.log(
        chalk.bgRed('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    );
    console.log(
        chalk.bgRed("!! Unable to setup node ../bin/acud-tools-runoject's package.json either missing !!")
    );
    console.log(
        chalk.bgRed('!! or malformed. Run `npm init` and then reinstall node ../bin/acud-tools-run    !!')
    );
    console.log(
        chalk.bgRed('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    );
}

function reportCompletion() {
    console.log(chalk.bgGreen('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'));
    console.log(chalk.bgGreen('!! node ../bin/acud-tools-run successfully installed for the project. !!'));
    console.log(chalk.bgGreen('!! Use `npm run pub` command for publishing.       !!'));
    console.log(chalk.bgGreen('!! publishing configuration.                                  !!'));
    console.log(chalk.bgGreen('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'));
}

function addConfigHooks(cfg, projectDir) {
    if (!cfg.scripts) {
        cfg.scripts = {};
    }

    if (cfg.scripts.pub) {
        return false;
    }

    cfg.scripts = Object.assign(cfg.scripts, {
        dist: 'node ../bin/acud-tools-run dist',
        compile: 'node ../bin/acud-tools-run compile',
        clean: 'node ../bin/acud-tools-run clean',
        start: 'node ../bin/acud-tools-run start',
        site: 'node ../bin/acud-tools-run site',
        deploy: 'node ../bin/acud-tools-run update-self && node ../bin/acud-tools-run deploy',
        'just-deploy': 'node ../bin/acud-tools-run just-deploy',
        pub: 'node ../bin/acud-tools-run update-self && node ../bin/acud-tools-run pub'
    });

    if (cfg.scripts.prepublish) {
        cfg.scripts['pre-publish'] = cfg.scripts.prepublish;
    }

    cfg.scripts.prepublish = 'node ../bin/acud-tools-run guard';

    writeFile(pathJoin(projectDir, 'package.json'), JSON.stringify(cfg, null, 2));

    return true;
}

function init() {
    const testMode = process.argv.indexOf('--test-mode') > -1;

    // NOTE: don't run on dev installation (running `npm install` in this repo)
    if (!testMode) {
        const npmArgs = getNpmArgs();

        if (!npmArgs || !npmArgs.some(arg => /^node ..\/bin\/acud-tools-run+\.\d+.\d+)?$/.test(arg))) {
            return;
        }
    }
    // NOTE: <projectDir>/node_modules/node ../bin/acud-tools-run
    const projectDir = pathJoin(__dirname, '../../');

    const cfg = require(path.join(projectDir, 'package.json'));

    if (!cfg) {
        reportNoConfig();
        process.exit(1);
    }
    else if (addConfigHooks(cfg, projectDir)) {
        reportCompletion();
    }
}

init();
