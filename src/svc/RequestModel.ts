import { ApiModel, ApiModelProperty } from 'swagger-express-ts';

interface Data {
  githuborg: string;
  project: string;
  teststategy: string;
  deploymentstrategy: string;
  stage: string;
  service: string;
  image: string;
  tag: string;
}

@ApiModel({
  description: '',
  name: 'RequestModel',
})
export class RequestModel {
  @ApiModelProperty({
    description: 'specversion',
    example: ['0.2'],
    type: 'string',
    required: true,
  })
  specversion: string;

  @ApiModelProperty({
    description: 'type',
    example: ['sh.keptn.events.tests-finished'],
    type: 'string',
    required: true,
  })
  type: string;

  @ApiModelProperty({
    description: 'source',
    example: ['Keptn'],
    type: 'string',
    required: true,
  })
  source: string;

  @ApiModelProperty({
    description: 'id',
    example: ['1234'],
    type: 'string',
    required: true,
  })
  id: string;

  @ApiModelProperty({
    description: 'time',
    example: ['20190325-15:25:56.096'],
    type: 'string',
    required: true,
  })
  time: string;

  @ApiModelProperty({
    description: 'datacontenttype',
    example: ['application/json'],
    type: 'string',
    required: true,
  })
  datacontenttype: string;

  @ApiModelProperty({
    description: 'shkeptncontext',
    example: ['db51be80-4fee-41af-bb53-1b093d2b694c'],
    type: 'string',
    required: true,
  })
  shkeptncontext: string;

  @ApiModelProperty({
    description: 'data',
    example: ['db51be80-4fee-41af-bb53-1b093d2b694c'],
    type: 'string',
    required: true,
  })
  data: Data;
}
