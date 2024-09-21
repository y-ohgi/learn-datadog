import tracer from 'dd-trace';
import { ENV } from './env';

tracer.init({
    hostname: ENV.DD_AGENT,
    env: ENV.DD_ENV,
});

export default tracer;
