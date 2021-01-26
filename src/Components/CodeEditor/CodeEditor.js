import '../../../node_modules/@patternfly/patternfly/components/CodeEditor/code-editor.scss';

import { LockIcon } from '@patternfly/react-icons/dist/esm/icons/lock-icon';
import MessageState from '../MessageState/MessageState';
import PropTypes from 'prop-types';
import React from 'react';
import messages from '../../Messages';
import { useIntl } from 'react-intl';

const CodeEditor = ({ code, codeType }) => {
    const intl = useIntl();

    return <div className="pf-c-code-editor pf-m-read-only ins-l-code-editor">
        <div className="pf-c-code-editor__header">
            <div className="pf-c-code-editor__tab">
                <span className="pf-c-code-editor__tab-icon">
                    <i className="fas fa-code"></i>
                </span>
                <span className="pf-c-code-editor__tab-text">{codeType}</span>
            </div>
        </div>
        <div className="pf-c-code-editor__main">
            <div className="pf-c-code-editor__code">
                {code?.length > 0 ? <pre className="pf-c-code-editor__code-pre">{code}</pre>
                    : <MessageState className='' icon={LockIcon} variant='small' title={intl.formatMessage(messages.sigCompiled)}
                        text={intl.formatMessage(messages.sigCompiledBody)} />}
            </div>
        </div>
    </div >;
};

CodeEditor.propTypes = {
    code: PropTypes.any,
    codeType: PropTypes.string
};

CodeEditor.defaultProps = { codeType: 'Code' };

export default CodeEditor;
