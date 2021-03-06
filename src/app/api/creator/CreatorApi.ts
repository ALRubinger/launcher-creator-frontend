export interface ZipPayload {
  name: string;
  shared: {
    runtime: string;
  };
  capabilities: Array<{ module: string; }>;
}

export interface ZipOutput {
  downloadLink: string;
}

export interface LaunchPayload {
  name: string;
  shared: {
    runtime: string;
  };
  capabilities: Array<{ module: string; }>;
  clusterId: string;
  projectName: string;
  gitOrganization: string;
  gitRepository: string;
}

export interface LaunchOutput {
  id: string;
  events: Array<{name: string, message: string}>;
}

export interface CreatorApi {
  zip(payload: ZipPayload, { authorizationToken }): Promise<ZipOutput>;
  launch(payload: LaunchPayload, { authorizationToken }): Promise<LaunchOutput>;
}