/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Delete builder cache
*
* keepStorage Long Amount of disk space in bytes to keep for cache (optional)
* all Boolean Remove all types of build cache (optional)
* filters String A JSON encoded value of the filters (a `map[string][]string`) to process on the list of build cache objects.  Available filters:  - `until=<timestamp>` remove cache older than `<timestamp>`. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon's local time. - `id=<id>` - `parent=<id>` - `type=<string>` - `description=<string>` - `inuse` - `shared` - `private`  (optional)
* returns BuildPruneResponse
* */
const buildPrune = ({ keepStorage, all, filters }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        keepStorage,
        all,
        filters,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Build an image
* Build an image from a tar archive with a `Dockerfile` in it.  The `Dockerfile` specifies how the image is built from the tar archive. It is typically in the archive's root, but can be at a different path or have a different name by specifying the `dockerfile` parameter. [See the `Dockerfile` reference for more information](https://docs.docker.com/engine/reference/builder/).  The Docker daemon performs a preliminary validation of the `Dockerfile` before starting the build, and returns an error if the syntax is incorrect. After that, each instruction is run one-by-one until the ID of the new image is output.  The build is canceled if the client drops the connection by quitting or being killed. 
*
* dockerfile String Path within the build context to the `Dockerfile`. This is ignored if `remote` is specified and points to an external `Dockerfile`. (optional)
* t String A name and optional tag to apply to the image in the `name:tag` format. If you omit the tag the default `latest` value is assumed. You can provide several `t` parameters. (optional)
* extrahosts String Extra hosts to add to /etc/hosts (optional)
* remote String A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file’s contents are placed into a file called `Dockerfile` and the image is built from that file. If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build. If the URI points to a tarball and the `dockerfile` parameter is also specified, there must be a file with the corresponding path inside the tarball. (optional)
* q Boolean Suppress verbose build output. (optional)
* nocache Boolean Do not use the cache when building the image. (optional)
* cachefrom String JSON array of images used for build cache resolution. (optional)
* pull String Attempt to pull the image even if an older image exists locally. (optional)
* rm Boolean Remove intermediate containers after a successful build. (optional)
* forcerm Boolean Always remove intermediate containers, even upon failure. (optional)
* memory Integer Set memory limit for build. (optional)
* memswap Integer Total memory (memory + swap). Set as `-1` to disable swap. (optional)
* cpushares Integer CPU shares (relative weight). (optional)
* cpusetcpus String CPUs in which to allow execution (e.g., `0-3`, `0,1`). (optional)
* cpuperiod Integer The length of a CPU period in microseconds. (optional)
* cpuquota Integer Microseconds of CPU time that the container can get in a CPU period. (optional)
* buildargs String JSON map of string pairs for build-time variables. Users pass these values at build-time. Docker uses the buildargs as the environment context for commands run via the `Dockerfile` RUN instruction, or for variable expansion in other `Dockerfile` instructions. This is not meant for passing secret values.  For example, the build arg `FOO=bar` would become `{\"FOO\":\"bar\"}` in JSON. This would result in the query parameter `buildargs={\"FOO\":\"bar\"}`. Note that `{\"FOO\":\"bar\"}` should be URI component encoded.  [Read more about the buildargs instruction.](https://docs.docker.com/engine/reference/builder/#arg)  (optional)
* shmsize Integer Size of `/dev/shm` in bytes. The size must be greater than 0. If omitted the system uses 64MB. (optional)
* squash Boolean Squash the resulting images layers into a single layer. *(Experimental release only.)* (optional)
* labels String Arbitrary key/value labels to set on the image, as a JSON map of string pairs. (optional)
* networkmode String Sets the networking mode for the run commands during build. Supported standard values are: `bridge`, `host`, `none`, and `container:<name|id>`. Any other value is taken as a custom network's name or ID to which this container should connect to.  (optional)
* contentType String  (optional)
* xRegistryConfig String This is a base64-encoded JSON object with auth configurations for multiple registries that a build may refer to.  The key is a registry URL, and the value is an auth configuration object, [as described in the authentication section](#section/Authentication). For example:  ``` {   \"docker.example.com\": {     \"username\": \"janedoe\",     \"password\": \"hunter2\"   },   \"https://index.docker.io/v1/\": {     \"username\": \"mobydock\",     \"password\": \"conta1n3rize14\"   } } ```  Only the registry domain name (and port if not the default 443) are required. However, for legacy reasons, the Docker Hub registry must be specified with both a `https://` prefix and a `/v1/` suffix even though Docker will prefer to use the v2 registry API.  (optional)
* platform String Platform in the format os[/arch[/variant]] (optional)
* target String Target build stage (optional)
* outputs String BuildKit output configuration (optional)
* version String Version of the builder backend to use.  - `1` is the first generation classic (deprecated) builder in the Docker daemon (default) - `2` is [BuildKit](https://github.com/moby/buildkit)  (optional)
* inputStream File A tar archive compressed with one of the following algorithms: identity (no compression), gzip, bzip2, xz. (optional)
* no response value expected for this operation
* */
const imageBuild = ({ dockerfile, t, extrahosts, remote, q, nocache, cachefrom, pull, rm, forcerm, memory, memswap, cpushares, cpusetcpus, cpuperiod, cpuquota, buildargs, shmsize, squash, labels, networkmode, contentType, xRegistryConfig, platform, target, outputs, version, inputStream }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        dockerfile,
        t,
        extrahosts,
        remote,
        q,
        nocache,
        cachefrom,
        pull,
        rm,
        forcerm,
        memory,
        memswap,
        cpushares,
        cpusetcpus,
        cpuperiod,
        cpuquota,
        buildargs,
        shmsize,
        squash,
        labels,
        networkmode,
        contentType,
        xRegistryConfig,
        platform,
        target,
        outputs,
        version,
        inputStream,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Create a new image from a container
*
* container String The ID or name of the container to commit (optional)
* repo String Repository name for the created image (optional)
* tag String Tag name for the create image (optional)
* comment String Commit message (optional)
* author String Author of the image (e.g., `John Hannibal Smith <hannibal@a-team.com>`) (optional)
* pause Boolean Whether to pause the container before committing (optional)
* changes String `Dockerfile` instructions to apply while committing (optional)
* containerConfig ContainerConfig The container configuration (optional)
* returns IdResponse
* */
const imageCommit = ({ container, repo, tag, comment, author, pause, changes, containerConfig }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        container,
        repo,
        tag,
        comment,
        author,
        pause,
        changes,
        containerConfig,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Create an image
* Pull or import an image.
*
* fromImage String Name of the image to pull. The name may include a tag or digest. This parameter may only be used when pulling an image. The pull is cancelled if the HTTP connection is closed. (optional)
* fromSrc String Source to import. The value may be a URL from which the image can be retrieved or `-` to read the image from the request body. This parameter may only be used when importing an image. (optional)
* repo String Repository name given to an image when it is imported. The repo may include a tag. This parameter may only be used when importing an image. (optional)
* tag String Tag or digest. If empty when pulling an image, this causes all tags for the given image to be pulled. (optional)
* message String Set commit message for imported image. (optional)
* xRegistryAuth String A base64url-encoded auth configuration.  Refer to the [authentication section](#section/Authentication) for details.  (optional)
* changes List Apply `Dockerfile` instructions to the image that is created, for example: `changes=ENV DEBUG=true`. Note that `ENV DEBUG=true` should be URI component encoded.  Supported `Dockerfile` instructions: `CMD`|`ENTRYPOINT`|`ENV`|`EXPOSE`|`ONBUILD`|`USER`|`VOLUME`|`WORKDIR`  (optional)
* platform String Platform in the format os[/arch[/variant]].  When used in combination with the `fromImage` option, the daemon checks if the given image is present in the local image cache with the given OS and Architecture, and otherwise attempts to pull the image. If the option is not set, the host's native OS and Architecture are used. If the given image does not exist in the local image cache, the daemon attempts to pull the image with the host's native OS and Architecture. If the given image does exists in the local image cache, but its OS or architecture does not match, a warning is produced.  When used with the `fromSrc` option to import an image from an archive, this option sets the platform information for the imported image. If the option is not set, the host's native OS and Architecture are used for the imported image.  (optional)
* inputImage String Image content if the value `-` has been specified in fromSrc query parameter (optional)
* no response value expected for this operation
* */
const imageCreate = ({ fromImage, fromSrc, repo, tag, message, xRegistryAuth, changes, platform, inputImage }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        fromImage,
        fromSrc,
        repo,
        tag,
        message,
        xRegistryAuth,
        changes,
        platform,
        inputImage,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Remove an image
* Remove an image, along with any untagged parent images that were referenced by that image.  Images can't be removed if they have descendant images, are being used by a running container or are being used by a build. 
*
* name String Image name or ID
* force Boolean Remove the image even if it is being used by stopped containers or has other tags (optional)
* noprune Boolean Do not delete untagged parent images (optional)
* returns List
* */
const imageDelete = ({ name, force, noprune }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
        force,
        noprune,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Export an image
* Get a tarball containing all images and metadata for a repository.  If `name` is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned. If `name` is an image ID, similarly only that image (and its parents) are returned, but with the exclusion of the `repositories` file in the tarball, as there were no image names referenced.  ### Image tarball format  An image tarball contains one directory per image layer (named using its long ID), each containing these files:  - `VERSION`: currently `1.0` - the file format version - `json`: detailed layer information, similar to `docker inspect layer_id` - `layer.tar`: A tarfile containing the filesystem changes in this layer  The `layer.tar` file contains `aufs` style `.wh..wh.aufs` files and directories for storing attribute changes and deletions.  If the tarball defines a repository, the tarball should also include a `repositories` file at the root that contains a list of repository and tag names mapped to layer IDs.  ```json {   \"hello-world\": {     \"latest\": \"565a9d68a73f6706862bfe8409a7f659776d4d60a8d096eb4a3cbce6999cc2a1\"   } } ``` 
*
* name String Image name or ID
* returns File
* */
const imageGet = ({ name }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Export several images
* Get a tarball containing all images and metadata for several image repositories.  For each value of the `names` parameter: if it is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned; if it is an image ID, similarly only that image (and its parents) are returned and there would be no names referenced in the 'repositories' file for this image ID.  For details on the format, see the [export image endpoint](#operation/ImageGet). 
*
* names List Image names to filter by (optional)
* returns File
* */
const imageGetAll = ({ names }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        names,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the history of an image
* Return parent layers of an image.
*
* name String Image name or ID
* returns List
* */
const imageHistory = ({ name }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Inspect an image
* Return low-level information about an image.
*
* name String Image name or id
* returns ImageInspect
* */
const imageInspect = ({ name }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* List Images
* Returns a list of images on the server. Note that it uses a different, smaller representation of an image than inspecting a single image.
*
* all Boolean Show all images. Only images from a final layer (no children) are shown by default. (optional)
* filters String A JSON encoded value of the filters (a `map[string][]string`) to process on the images list.  Available filters:  - `before`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`) - `dangling=true` - `label=key` or `label=\"key=value\"` of an image label - `reference`=(`<image-name>[:<tag>]`) - `since`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`) - `until=<timestamp>`  (optional)
* sharedSize Boolean Compute and show shared size as a `SharedSize` field on each image. (optional)
* digests Boolean Show digest information as a `RepoDigests` field on each image. (optional)
* returns List
* */
const imageList = ({ all, filters, sharedSize, digests }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        all,
        filters,
        sharedSize,
        digests,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Import images
* Load a set of images and tags into a repository.  For details on the format, see the [export image endpoint](#operation/ImageGet). 
*
* quiet Boolean Suppress progress details during load. (optional)
* imagesTarball File Tar archive containing images (optional)
* no response value expected for this operation
* */
const imageLoad = ({ quiet, imagesTarball }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        quiet,
        imagesTarball,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete unused images
*
* filters String Filters to process on the prune list, encoded as JSON (a `map[string][]string`). Available filters:  - `dangling=<boolean>` When set to `true` (or `1`), prune only    unused *and* untagged images. When set to `false`    (or `0`), all unused images are pruned. - `until=<string>` Prune images created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time. - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune images with (or without, in case `label!=...` is used) the specified labels.  (optional)
* returns ImagePruneResponse
* */
const imagePrune = ({ filters }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        filters,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Push an image
* Push an image to a registry.  If you wish to push an image on to a private registry, that image must already have a tag which references the registry. For example, `registry.example.com/myimage:latest`.  The push is cancelled if the HTTP connection is closed. 
*
* name String Image name or ID.
* xRegistryAuth String A base64url-encoded auth configuration.  Refer to the [authentication section](#section/Authentication) for details. 
* tag String The tag to associate with the image on the registry. (optional)
* no response value expected for this operation
* */
const imagePush = ({ name, xRegistryAuth, tag }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
        xRegistryAuth,
        tag,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Search images
* Search for an image on Docker Hub.
*
* term String Term to search
* limit Integer Maximum number of results to return (optional)
* filters String A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters:  - `is-automated=(true|false)` (deprecated, see below) - `is-official=(true|false)` - `stars=<number>` Matches images that has at least 'number' stars.  The `is-automated` filter is deprecated. The `is_automated` field has been deprecated by Docker Hub's search API. Consequently, searching for `is-automated=true` will yield no results.  (optional)
* returns List
* */
const imageSearch = ({ term, limit, filters }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        term,
        limit,
        filters,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Tag an image
* Tag an image so that it becomes part of a repository.
*
* name String Image name or ID to tag.
* repo String The repository to tag in. For example, `someuser/someimage`. (optional)
* tag String The name of the new tag. (optional)
* no response value expected for this operation
* */
const imageTag = ({ name, repo, tag }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
        repo,
        tag,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  buildPrune,
  imageBuild,
  imageCommit,
  imageCreate,
  imageDelete,
  imageGet,
  imageGetAll,
  imageHistory,
  imageInspect,
  imageList,
  imageLoad,
  imagePrune,
  imagePush,
  imageSearch,
  imageTag,
};
