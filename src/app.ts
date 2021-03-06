/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import {
    Actor,
    AnimationEaseCurves,
    AnimationKeyframe,
    AnimationWrapMode,
    ButtonBehavior,
    Context,
    Quaternion,
    TextAnchorLocation,
    Vector3,
    ColliderGeometry,
    Collider,
    BoxColliderGeometry
} from '@microsoft/mixed-reality-extension-sdk';
import * as MRE from '@microsoft/mixed-reality-extension-sdk';
import * as MRESDK from '@microsoft/mixed-reality-extension-sdk';

/**
 * The main class of this app. All the logic goes here.
 */
export default class HelloWorld {
    [x: string]: any;
    enabled: boolean;
    colliderType: 'box';
    private text: Actor = null;
    private cube: Actor = null;
    colliderGeometry: ColliderGeometry
    constructor(private context: Context, private baseUrl: string) {
        this.context.onStarted(() => this.started());
    }
    /**
     * Once the context is "started", initialize the app.
     */
    private started() {
        // Create a new actor with no mesh, but some text. This operation is asynchronous, so
        // it returns a "forward" promise (a special promise, as we'll see later).
        const textPromise = Actor.CreateEmpty(this.context, {
            actor: {
                name: 'Text',
                transform: {
                },
                text: {
                    contents: " ",
                    anchor: TextAnchorLocation.MiddleCenter,
                    color: { r: 30 / 255, g: 206 / 255, b: 213 / 255 },
                    height: 0.3
                }
            }
        });

        // AltspaceVR resource IDs from https://account.altvr.com/kits/
        const libraryActors: Array<MRE.ForwardPromise<MRE.Actor>> = [];
        libraryActors.push(MRE.Actor.CreateFromLibrary(this.context, {
            resourceId: "artifact: 989569229617365197",
            actor: {
                name: 'Cube',
                transform: {
                }
            }
        }));
        // Set up cursor interaction. We add the input behavior ButtonBehavior to the cube.
        // Button behaviors have two pairs of events: hover start/stop, and click start/stop.
        libraryActors.forEach((actor: MRE.ForwardPromise<MRE.Actor>) => {
            if (actor) {
                const buttonBehavior = actor.value.setBehavior(MRE.ButtonBehavior);

                // Trigger the grow/shrink animations on hover.
                //@ts-ignore
                buttonBehavior.onClick('pressed', (userId: string) => {        const libraryActors: Array<MRE.ForwardPromise<MRE.Actor>> = [];
                    libraryActors.push(MRE.Actor.CreateFromLibrary(this.context, {
                        resourceId: "artifact: 1265485061176689661",
                        actor: {
                            name: 'Pandafog 02',
                            transform: {
                                position: { x: 0, y: 0, z: 0 },
                                scale: { x: 0.4, y: 0.4, z: 0.4 }
                            }
                        }
                    }));
                });
    }
}
        )
}
}
