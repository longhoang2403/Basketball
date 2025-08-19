var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2080 = root || request.c( 'UnityEngine.JointSpring' )
  var i2081 = data
  i2080.spring = i2081[0]
  i2080.damper = i2081[1]
  i2080.targetPosition = i2081[2]
  return i2080
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2082 = root || request.c( 'UnityEngine.JointMotor' )
  var i2083 = data
  i2082.m_TargetVelocity = i2083[0]
  i2082.m_Force = i2083[1]
  i2082.m_FreeSpin = i2083[2]
  return i2082
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2084 = root || request.c( 'UnityEngine.JointLimits' )
  var i2085 = data
  i2084.m_Min = i2085[0]
  i2084.m_Max = i2085[1]
  i2084.m_Bounciness = i2085[2]
  i2084.m_BounceMinVelocity = i2085[3]
  i2084.m_ContactDistance = i2085[4]
  i2084.minBounce = i2085[5]
  i2084.maxBounce = i2085[6]
  return i2084
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2086 = root || request.c( 'UnityEngine.JointDrive' )
  var i2087 = data
  i2086.m_PositionSpring = i2087[0]
  i2086.m_PositionDamper = i2087[1]
  i2086.m_MaximumForce = i2087[2]
  i2086.m_UseAcceleration = i2087[3]
  return i2086
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2088 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2089 = data
  i2088.m_Spring = i2089[0]
  i2088.m_Damper = i2089[1]
  return i2088
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2090 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2091 = data
  i2090.m_Limit = i2091[0]
  i2090.m_Bounciness = i2091[1]
  i2090.m_ContactDistance = i2091[2]
  return i2090
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2092 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2093 = data
  i2092.m_ExtremumSlip = i2093[0]
  i2092.m_ExtremumValue = i2093[1]
  i2092.m_AsymptoteSlip = i2093[2]
  i2092.m_AsymptoteValue = i2093[3]
  i2092.m_Stiffness = i2093[4]
  return i2092
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2094 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2095 = data
  i2094.m_LowerAngle = i2095[0]
  i2094.m_UpperAngle = i2095[1]
  return i2094
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2096 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2097 = data
  i2096.m_MotorSpeed = i2097[0]
  i2096.m_MaximumMotorTorque = i2097[1]
  return i2096
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2098 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2099 = data
  i2098.m_DampingRatio = i2099[0]
  i2098.m_Frequency = i2099[1]
  i2098.m_Angle = i2099[2]
  return i2098
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2100 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2101 = data
  i2100.m_LowerTranslation = i2101[0]
  i2100.m_UpperTranslation = i2101[1]
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2103 = data
  i2102.name = i2103[0]
  i2102.width = i2103[1]
  i2102.height = i2103[2]
  i2102.mipmapCount = i2103[3]
  i2102.anisoLevel = i2103[4]
  i2102.filterMode = i2103[5]
  i2102.hdr = !!i2103[6]
  i2102.format = i2103[7]
  i2102.wrapMode = i2103[8]
  i2102.alphaIsTransparency = !!i2103[9]
  i2102.alphaSource = i2103[10]
  i2102.graphicsFormat = i2103[11]
  i2102.sRGBTexture = !!i2103[12]
  i2102.desiredColorSpace = i2103[13]
  i2102.wrapU = i2103[14]
  i2102.wrapV = i2103[15]
  return i2102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2105 = data
  i2104.name = i2105[0]
  i2104.halfPrecision = !!i2105[1]
  i2104.useUInt32IndexFormat = !!i2105[2]
  i2104.vertexCount = i2105[3]
  i2104.aabb = i2105[4]
  var i2107 = i2105[5]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.push( !!i2107[i + 0] );
  }
  i2104.streams = i2106
  i2104.vertices = i2105[6]
  var i2109 = i2105[7]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2109[i + 0]) );
  }
  i2104.subMeshes = i2108
  var i2111 = i2105[8]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 16) {
    i2110.push( new pc.Mat4().setData(i2111[i + 0], i2111[i + 1], i2111[i + 2], i2111[i + 3],  i2111[i + 4], i2111[i + 5], i2111[i + 6], i2111[i + 7],  i2111[i + 8], i2111[i + 9], i2111[i + 10], i2111[i + 11],  i2111[i + 12], i2111[i + 13], i2111[i + 14], i2111[i + 15]) );
  }
  i2104.bindposes = i2110
  var i2113 = i2105[9]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2113[i + 0]) );
  }
  i2104.blendShapes = i2112
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2119 = data
  i2118.triangles = i2119[0]
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2125 = data
  i2124.name = i2125[0]
  var i2127 = i2125[1]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2127[i + 0]) );
  }
  i2124.frames = i2126
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2128 = root || new pc.UnityMaterial()
  var i2129 = data
  i2128.name = i2129[0]
  request.r(i2129[1], i2129[2], 0, i2128, 'shader')
  i2128.renderQueue = i2129[3]
  i2128.enableInstancing = !!i2129[4]
  var i2131 = i2129[5]
  var i2130 = []
  for(var i = 0; i < i2131.length; i += 1) {
    i2130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2131[i + 0]) );
  }
  i2128.floatParameters = i2130
  var i2133 = i2129[6]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2133[i + 0]) );
  }
  i2128.colorParameters = i2132
  var i2135 = i2129[7]
  var i2134 = []
  for(var i = 0; i < i2135.length; i += 1) {
    i2134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2135[i + 0]) );
  }
  i2128.vectorParameters = i2134
  var i2137 = i2129[8]
  var i2136 = []
  for(var i = 0; i < i2137.length; i += 1) {
    i2136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2137[i + 0]) );
  }
  i2128.textureParameters = i2136
  var i2139 = i2129[9]
  var i2138 = []
  for(var i = 0; i < i2139.length; i += 1) {
    i2138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2139[i + 0]) );
  }
  i2128.materialFlags = i2138
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2143 = data
  i2142.name = i2143[0]
  i2142.value = i2143[1]
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2147 = data
  i2146.name = i2147[0]
  i2146.value = new pc.Color(i2147[1], i2147[2], i2147[3], i2147[4])
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2151 = data
  i2150.name = i2151[0]
  i2150.value = new pc.Vec4( i2151[1], i2151[2], i2151[3], i2151[4] )
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2155 = data
  i2154.name = i2155[0]
  request.r(i2155[1], i2155[2], 0, i2154, 'value')
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2159 = data
  i2158.name = i2159[0]
  i2158.enabled = !!i2159[1]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2161 = data
  i2160.position = new pc.Vec3( i2161[0], i2161[1], i2161[2] )
  i2160.scale = new pc.Vec3( i2161[3], i2161[4], i2161[5] )
  i2160.rotation = new pc.Quat(i2161[6], i2161[7], i2161[8], i2161[9])
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2163 = data
  request.r(i2163[0], i2163[1], 0, i2162, 'sharedMesh')
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2165 = data
  request.r(i2165[0], i2165[1], 0, i2164, 'additionalVertexStreams')
  i2164.enabled = !!i2165[2]
  request.r(i2165[3], i2165[4], 0, i2164, 'sharedMaterial')
  var i2167 = i2165[5]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 2) {
  request.r(i2167[i + 0], i2167[i + 1], 2, i2166, '')
  }
  i2164.sharedMaterials = i2166
  i2164.receiveShadows = !!i2165[6]
  i2164.shadowCastingMode = i2165[7]
  i2164.sortingLayerID = i2165[8]
  i2164.sortingOrder = i2165[9]
  i2164.lightmapIndex = i2165[10]
  i2164.lightmapSceneIndex = i2165[11]
  i2164.lightmapScaleOffset = new pc.Vec4( i2165[12], i2165[13], i2165[14], i2165[15] )
  i2164.lightProbeUsage = i2165[16]
  i2164.reflectionProbeUsage = i2165[17]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2171 = data
  i2170.name = i2171[0]
  i2170.tagId = i2171[1]
  i2170.enabled = !!i2171[2]
  i2170.isStatic = !!i2171[3]
  i2170.layer = i2171[4]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2173 = data
  i2172.name = i2173[0]
  i2172.atlasId = i2173[1]
  i2172.mipmapCount = i2173[2]
  i2172.hdr = !!i2173[3]
  i2172.size = i2173[4]
  i2172.anisoLevel = i2173[5]
  i2172.filterMode = i2173[6]
  var i2175 = i2173[7]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 4) {
    i2174.push( UnityEngine.Rect.MinMaxRect(i2175[i + 0], i2175[i + 1], i2175[i + 2], i2175[i + 3]) );
  }
  i2172.rects = i2174
  i2172.wrapU = i2173[8]
  i2172.wrapV = i2173[9]
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2179 = data
  i2178.name = i2179[0]
  i2178.index = i2179[1]
  i2178.startup = !!i2179[2]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2181 = data
  i2180.pivot = new pc.Vec2( i2181[0], i2181[1] )
  i2180.anchorMin = new pc.Vec2( i2181[2], i2181[3] )
  i2180.anchorMax = new pc.Vec2( i2181[4], i2181[5] )
  i2180.sizeDelta = new pc.Vec2( i2181[6], i2181[7] )
  i2180.anchoredPosition3D = new pc.Vec3( i2181[8], i2181[9], i2181[10] )
  i2180.rotation = new pc.Quat(i2181[11], i2181[12], i2181[13], i2181[14])
  i2180.scale = new pc.Vec3( i2181[15], i2181[16], i2181[17] )
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2183 = data
  i2182.planeDistance = i2183[0]
  i2182.referencePixelsPerUnit = i2183[1]
  i2182.isFallbackOverlay = !!i2183[2]
  i2182.renderMode = i2183[3]
  i2182.renderOrder = i2183[4]
  i2182.sortingLayerName = i2183[5]
  i2182.sortingOrder = i2183[6]
  i2182.scaleFactor = i2183[7]
  request.r(i2183[8], i2183[9], 0, i2182, 'worldCamera')
  i2182.overrideSorting = !!i2183[10]
  i2182.pixelPerfect = !!i2183[11]
  i2182.targetDisplay = i2183[12]
  i2182.overridePixelPerfect = !!i2183[13]
  i2182.enabled = !!i2183[14]
  return i2182
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2184 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2185 = data
  i2184.m_UiScaleMode = i2185[0]
  i2184.m_ReferencePixelsPerUnit = i2185[1]
  i2184.m_ScaleFactor = i2185[2]
  i2184.m_ReferenceResolution = new pc.Vec2( i2185[3], i2185[4] )
  i2184.m_ScreenMatchMode = i2185[5]
  i2184.m_MatchWidthOrHeight = i2185[6]
  i2184.m_PhysicalUnit = i2185[7]
  i2184.m_FallbackScreenDPI = i2185[8]
  i2184.m_DefaultSpriteDPI = i2185[9]
  i2184.m_DynamicPixelsPerUnit = i2185[10]
  i2184.m_PresetInfoIsWorld = !!i2185[11]
  return i2184
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2186 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2187 = data
  i2186.m_IgnoreReversedGraphics = !!i2187[0]
  i2186.m_BlockingObjects = i2187[1]
  i2186.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2187[2] )
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2189 = data
  i2188.cullTransparentMesh = !!i2189[0]
  return i2188
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2190 = root || request.c( 'UnityEngine.UI.Image' )
  var i2191 = data
  request.r(i2191[0], i2191[1], 0, i2190, 'm_Sprite')
  i2190.m_Type = i2191[2]
  i2190.m_PreserveAspect = !!i2191[3]
  i2190.m_FillCenter = !!i2191[4]
  i2190.m_FillMethod = i2191[5]
  i2190.m_FillAmount = i2191[6]
  i2190.m_FillClockwise = !!i2191[7]
  i2190.m_FillOrigin = i2191[8]
  i2190.m_UseSpriteMesh = !!i2191[9]
  i2190.m_PixelsPerUnitMultiplier = i2191[10]
  i2190.m_Maskable = !!i2191[11]
  request.r(i2191[12], i2191[13], 0, i2190, 'm_Material')
  i2190.m_Color = new pc.Color(i2191[14], i2191[15], i2191[16], i2191[17])
  i2190.m_RaycastTarget = !!i2191[18]
  i2190.m_RaycastPadding = new pc.Vec4( i2191[19], i2191[20], i2191[21], i2191[22] )
  return i2190
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2192 = root || request.c( 'UnityEngine.UI.Text' )
  var i2193 = data
  i2192.m_FontData = request.d('UnityEngine.UI.FontData', i2193[0], i2192.m_FontData)
  i2192.m_Text = i2193[1]
  i2192.m_Maskable = !!i2193[2]
  request.r(i2193[3], i2193[4], 0, i2192, 'm_Material')
  i2192.m_Color = new pc.Color(i2193[5], i2193[6], i2193[7], i2193[8])
  i2192.m_RaycastTarget = !!i2193[9]
  i2192.m_RaycastPadding = new pc.Vec4( i2193[10], i2193[11], i2193[12], i2193[13] )
  return i2192
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2194 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2195 = data
  request.r(i2195[0], i2195[1], 0, i2194, 'm_Font')
  i2194.m_FontSize = i2195[2]
  i2194.m_FontStyle = i2195[3]
  i2194.m_BestFit = !!i2195[4]
  i2194.m_MinSize = i2195[5]
  i2194.m_MaxSize = i2195[6]
  i2194.m_Alignment = i2195[7]
  i2194.m_AlignByGeometry = !!i2195[8]
  i2194.m_RichText = !!i2195[9]
  i2194.m_HorizontalOverflow = i2195[10]
  i2194.m_VerticalOverflow = i2195[11]
  i2194.m_LineSpacing = i2195[12]
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2197 = data
  i2196.center = new pc.Vec3( i2197[0], i2197[1], i2197[2] )
  i2196.radius = i2197[3]
  i2196.enabled = !!i2197[4]
  i2196.isTrigger = !!i2197[5]
  request.r(i2197[6], i2197[7], 0, i2196, 'material')
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2199 = data
  i2198.mass = i2199[0]
  i2198.drag = i2199[1]
  i2198.angularDrag = i2199[2]
  i2198.useGravity = !!i2199[3]
  i2198.isKinematic = !!i2199[4]
  i2198.constraints = i2199[5]
  i2198.maxAngularVelocity = i2199[6]
  i2198.collisionDetectionMode = i2199[7]
  i2198.interpolation = i2199[8]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i2201 = data
  var i2203 = i2201[0]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 3) {
    i2202.push( new pc.Vec3( i2203[i + 0], i2203[i + 1], i2203[i + 2] ) );
  }
  i2200.positions = i2202
  i2200.positionCount = i2201[1]
  i2200.time = i2201[2]
  i2200.startWidth = i2201[3]
  i2200.endWidth = i2201[4]
  i2200.widthMultiplier = i2201[5]
  i2200.autodestruct = !!i2201[6]
  i2200.emitting = !!i2201[7]
  i2200.numCornerVertices = i2201[8]
  i2200.numCapVertices = i2201[9]
  i2200.minVertexDistance = i2201[10]
  i2200.colorGradient = i2201[11] ? new pc.ColorGradient(i2201[11][0], i2201[11][1], i2201[11][2]) : null
  i2200.startColor = new pc.Color(i2201[12], i2201[13], i2201[14], i2201[15])
  i2200.endColor = new pc.Color(i2201[16], i2201[17], i2201[18], i2201[19])
  i2200.generateLightingData = !!i2201[20]
  i2200.textureMode = i2201[21]
  i2200.alignment = i2201[22]
  i2200.widthCurve = new pc.AnimationCurve( { keys_flow: i2201[23] } )
  i2200.enabled = !!i2201[24]
  request.r(i2201[25], i2201[26], 0, i2200, 'sharedMaterial')
  var i2205 = i2201[27]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 2) {
  request.r(i2205[i + 0], i2205[i + 1], 2, i2204, '')
  }
  i2200.sharedMaterials = i2204
  i2200.receiveShadows = !!i2201[28]
  i2200.shadowCastingMode = i2201[29]
  i2200.sortingLayerID = i2201[30]
  i2200.sortingOrder = i2201[31]
  i2200.lightmapIndex = i2201[32]
  i2200.lightmapSceneIndex = i2201[33]
  i2200.lightmapScaleOffset = new pc.Vec4( i2201[34], i2201[35], i2201[36], i2201[37] )
  i2200.lightProbeUsage = i2201[38]
  i2200.reflectionProbeUsage = i2201[39]
  return i2200
}

Deserializers["BallRotation"] = function (request, data, root) {
  var i2208 = root || request.c( 'BallRotation' )
  var i2209 = data
  i2208.rotationMultiplier = i2209[0]
  i2208.basket = !!i2209[1]
  i2208.baskets = !!i2209[2]
  i2208.floors = !!i2209[3]
  i2208.isHitByRay = !!i2209[4]
  request.r(i2209[5], i2209[6], 0, i2208, 'myParticle')
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2211 = data
  i2210.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2211[0], i2210.main)
  i2210.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2211[1], i2210.colorBySpeed)
  i2210.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2211[2], i2210.colorOverLifetime)
  i2210.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2211[3], i2210.emission)
  i2210.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2211[4], i2210.rotationBySpeed)
  i2210.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2211[5], i2210.rotationOverLifetime)
  i2210.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2211[6], i2210.shape)
  i2210.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2211[7], i2210.sizeBySpeed)
  i2210.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2211[8], i2210.sizeOverLifetime)
  i2210.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2211[9], i2210.textureSheetAnimation)
  i2210.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2211[10], i2210.velocityOverLifetime)
  i2210.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2211[11], i2210.noise)
  i2210.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2211[12], i2210.inheritVelocity)
  i2210.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2211[13], i2210.forceOverLifetime)
  i2210.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2211[14], i2210.limitVelocityOverLifetime)
  i2210.useAutoRandomSeed = !!i2211[15]
  i2210.randomSeed = i2211[16]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2212 = root || new pc.ParticleSystemMain()
  var i2213 = data
  i2212.duration = i2213[0]
  i2212.loop = !!i2213[1]
  i2212.prewarm = !!i2213[2]
  i2212.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[3], i2212.startDelay)
  i2212.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[4], i2212.startLifetime)
  i2212.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[5], i2212.startSpeed)
  i2212.startSize3D = !!i2213[6]
  i2212.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[7], i2212.startSizeX)
  i2212.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[8], i2212.startSizeY)
  i2212.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[9], i2212.startSizeZ)
  i2212.startRotation3D = !!i2213[10]
  i2212.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[11], i2212.startRotationX)
  i2212.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[12], i2212.startRotationY)
  i2212.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[13], i2212.startRotationZ)
  i2212.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2213[14], i2212.startColor)
  i2212.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[15], i2212.gravityModifier)
  i2212.simulationSpace = i2213[16]
  request.r(i2213[17], i2213[18], 0, i2212, 'customSimulationSpace')
  i2212.simulationSpeed = i2213[19]
  i2212.useUnscaledTime = !!i2213[20]
  i2212.scalingMode = i2213[21]
  i2212.playOnAwake = !!i2213[22]
  i2212.maxParticles = i2213[23]
  i2212.emitterVelocityMode = i2213[24]
  i2212.stopAction = i2213[25]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2214 = root || new pc.MinMaxCurve()
  var i2215 = data
  i2214.mode = i2215[0]
  i2214.curveMin = new pc.AnimationCurve( { keys_flow: i2215[1] } )
  i2214.curveMax = new pc.AnimationCurve( { keys_flow: i2215[2] } )
  i2214.curveMultiplier = i2215[3]
  i2214.constantMin = i2215[4]
  i2214.constantMax = i2215[5]
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2216 = root || new pc.MinMaxGradient()
  var i2217 = data
  i2216.mode = i2217[0]
  i2216.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2217[1], i2216.gradientMin)
  i2216.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2217[2], i2216.gradientMax)
  i2216.colorMin = new pc.Color(i2217[3], i2217[4], i2217[5], i2217[6])
  i2216.colorMax = new pc.Color(i2217[7], i2217[8], i2217[9], i2217[10])
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2219 = data
  i2218.mode = i2219[0]
  var i2221 = i2219[1]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2221[i + 0]) );
  }
  i2218.colorKeys = i2220
  var i2223 = i2219[2]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2223[i + 0]) );
  }
  i2218.alphaKeys = i2222
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2224 = root || new pc.ParticleSystemColorBySpeed()
  var i2225 = data
  i2224.enabled = !!i2225[0]
  i2224.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2225[1], i2224.color)
  i2224.range = new pc.Vec2( i2225[2], i2225[3] )
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2229 = data
  i2228.color = new pc.Color(i2229[0], i2229[1], i2229[2], i2229[3])
  i2228.time = i2229[4]
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2233 = data
  i2232.alpha = i2233[0]
  i2232.time = i2233[1]
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2234 = root || new pc.ParticleSystemColorOverLifetime()
  var i2235 = data
  i2234.enabled = !!i2235[0]
  i2234.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2235[1], i2234.color)
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2236 = root || new pc.ParticleSystemEmitter()
  var i2237 = data
  i2236.enabled = !!i2237[0]
  i2236.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2237[1], i2236.rateOverTime)
  i2236.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2237[2], i2236.rateOverDistance)
  var i2239 = i2237[3]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2239[i + 0]) );
  }
  i2236.bursts = i2238
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2242 = root || new pc.ParticleSystemBurst()
  var i2243 = data
  i2242.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2243[0], i2242.count)
  i2242.cycleCount = i2243[1]
  i2242.minCount = i2243[2]
  i2242.maxCount = i2243[3]
  i2242.repeatInterval = i2243[4]
  i2242.time = i2243[5]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2244 = root || new pc.ParticleSystemRotationBySpeed()
  var i2245 = data
  i2244.enabled = !!i2245[0]
  i2244.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2245[1], i2244.x)
  i2244.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2245[2], i2244.y)
  i2244.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2245[3], i2244.z)
  i2244.separateAxes = !!i2245[4]
  i2244.range = new pc.Vec2( i2245[5], i2245[6] )
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2246 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2247 = data
  i2246.enabled = !!i2247[0]
  i2246.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2247[1], i2246.x)
  i2246.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2247[2], i2246.y)
  i2246.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2247[3], i2246.z)
  i2246.separateAxes = !!i2247[4]
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2248 = root || new pc.ParticleSystemShape()
  var i2249 = data
  i2248.enabled = !!i2249[0]
  i2248.shapeType = i2249[1]
  i2248.randomDirectionAmount = i2249[2]
  i2248.sphericalDirectionAmount = i2249[3]
  i2248.randomPositionAmount = i2249[4]
  i2248.alignToDirection = !!i2249[5]
  i2248.radius = i2249[6]
  i2248.radiusMode = i2249[7]
  i2248.radiusSpread = i2249[8]
  i2248.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[9], i2248.radiusSpeed)
  i2248.radiusThickness = i2249[10]
  i2248.angle = i2249[11]
  i2248.length = i2249[12]
  i2248.boxThickness = new pc.Vec3( i2249[13], i2249[14], i2249[15] )
  i2248.meshShapeType = i2249[16]
  request.r(i2249[17], i2249[18], 0, i2248, 'mesh')
  request.r(i2249[19], i2249[20], 0, i2248, 'meshRenderer')
  request.r(i2249[21], i2249[22], 0, i2248, 'skinnedMeshRenderer')
  i2248.useMeshMaterialIndex = !!i2249[23]
  i2248.meshMaterialIndex = i2249[24]
  i2248.useMeshColors = !!i2249[25]
  i2248.normalOffset = i2249[26]
  i2248.arc = i2249[27]
  i2248.arcMode = i2249[28]
  i2248.arcSpread = i2249[29]
  i2248.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[30], i2248.arcSpeed)
  i2248.donutRadius = i2249[31]
  i2248.position = new pc.Vec3( i2249[32], i2249[33], i2249[34] )
  i2248.rotation = new pc.Vec3( i2249[35], i2249[36], i2249[37] )
  i2248.scale = new pc.Vec3( i2249[38], i2249[39], i2249[40] )
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2250 = root || new pc.ParticleSystemSizeBySpeed()
  var i2251 = data
  i2250.enabled = !!i2251[0]
  i2250.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[1], i2250.x)
  i2250.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[2], i2250.y)
  i2250.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[3], i2250.z)
  i2250.separateAxes = !!i2251[4]
  i2250.range = new pc.Vec2( i2251[5], i2251[6] )
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2252 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2253 = data
  i2252.enabled = !!i2253[0]
  i2252.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[1], i2252.x)
  i2252.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[2], i2252.y)
  i2252.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[3], i2252.z)
  i2252.separateAxes = !!i2253[4]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2254 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2255 = data
  i2254.enabled = !!i2255[0]
  i2254.mode = i2255[1]
  i2254.animation = i2255[2]
  i2254.numTilesX = i2255[3]
  i2254.numTilesY = i2255[4]
  i2254.useRandomRow = !!i2255[5]
  i2254.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2255[6], i2254.frameOverTime)
  i2254.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2255[7], i2254.startFrame)
  i2254.cycleCount = i2255[8]
  i2254.rowIndex = i2255[9]
  i2254.flipU = i2255[10]
  i2254.flipV = i2255[11]
  i2254.spriteCount = i2255[12]
  var i2257 = i2255[13]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 2) {
  request.r(i2257[i + 0], i2257[i + 1], 2, i2256, '')
  }
  i2254.sprites = i2256
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2260 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2261 = data
  i2260.enabled = !!i2261[0]
  i2260.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[1], i2260.x)
  i2260.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[2], i2260.y)
  i2260.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[3], i2260.z)
  i2260.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[4], i2260.radial)
  i2260.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[5], i2260.speedModifier)
  i2260.space = i2261[6]
  i2260.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[7], i2260.orbitalX)
  i2260.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[8], i2260.orbitalY)
  i2260.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[9], i2260.orbitalZ)
  i2260.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[10], i2260.orbitalOffsetX)
  i2260.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[11], i2260.orbitalOffsetY)
  i2260.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2261[12], i2260.orbitalOffsetZ)
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2262 = root || new pc.ParticleSystemNoise()
  var i2263 = data
  i2262.enabled = !!i2263[0]
  i2262.separateAxes = !!i2263[1]
  i2262.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[2], i2262.strengthX)
  i2262.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[3], i2262.strengthY)
  i2262.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[4], i2262.strengthZ)
  i2262.frequency = i2263[5]
  i2262.damping = !!i2263[6]
  i2262.octaveCount = i2263[7]
  i2262.octaveMultiplier = i2263[8]
  i2262.octaveScale = i2263[9]
  i2262.quality = i2263[10]
  i2262.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[11], i2262.scrollSpeed)
  i2262.scrollSpeedMultiplier = i2263[12]
  i2262.remapEnabled = !!i2263[13]
  i2262.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[14], i2262.remapX)
  i2262.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[15], i2262.remapY)
  i2262.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[16], i2262.remapZ)
  i2262.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[17], i2262.positionAmount)
  i2262.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[18], i2262.rotationAmount)
  i2262.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[19], i2262.sizeAmount)
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2264 = root || new pc.ParticleSystemInheritVelocity()
  var i2265 = data
  i2264.enabled = !!i2265[0]
  i2264.mode = i2265[1]
  i2264.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[2], i2264.curve)
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2266 = root || new pc.ParticleSystemForceOverLifetime()
  var i2267 = data
  i2266.enabled = !!i2267[0]
  i2266.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[1], i2266.x)
  i2266.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[2], i2266.y)
  i2266.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[3], i2266.z)
  i2266.space = i2267[4]
  i2266.randomized = !!i2267[5]
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2268 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2269 = data
  i2268.enabled = !!i2269[0]
  i2268.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[1], i2268.limit)
  i2268.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[2], i2268.limitX)
  i2268.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[3], i2268.limitY)
  i2268.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[4], i2268.limitZ)
  i2268.dampen = i2269[5]
  i2268.separateAxes = !!i2269[6]
  i2268.space = i2269[7]
  i2268.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[8], i2268.drag)
  i2268.multiplyDragByParticleSize = !!i2269[9]
  i2268.multiplyDragByParticleVelocity = !!i2269[10]
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2271 = data
  request.r(i2271[0], i2271[1], 0, i2270, 'mesh')
  i2270.meshCount = i2271[2]
  i2270.activeVertexStreamsCount = i2271[3]
  i2270.alignment = i2271[4]
  i2270.renderMode = i2271[5]
  i2270.sortMode = i2271[6]
  i2270.lengthScale = i2271[7]
  i2270.velocityScale = i2271[8]
  i2270.cameraVelocityScale = i2271[9]
  i2270.normalDirection = i2271[10]
  i2270.sortingFudge = i2271[11]
  i2270.minParticleSize = i2271[12]
  i2270.maxParticleSize = i2271[13]
  i2270.pivot = new pc.Vec3( i2271[14], i2271[15], i2271[16] )
  request.r(i2271[17], i2271[18], 0, i2270, 'trailMaterial')
  i2270.applyActiveColorSpace = !!i2271[19]
  i2270.enabled = !!i2271[20]
  request.r(i2271[21], i2271[22], 0, i2270, 'sharedMaterial')
  var i2273 = i2271[23]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 2) {
  request.r(i2273[i + 0], i2273[i + 1], 2, i2272, '')
  }
  i2270.sharedMaterials = i2272
  i2270.receiveShadows = !!i2271[24]
  i2270.shadowCastingMode = i2271[25]
  i2270.sortingLayerID = i2271[26]
  i2270.sortingOrder = i2271[27]
  i2270.lightmapIndex = i2271[28]
  i2270.lightmapSceneIndex = i2271[29]
  i2270.lightmapScaleOffset = new pc.Vec4( i2271[30], i2271[31], i2271[32], i2271[33] )
  i2270.lightProbeUsage = i2271[34]
  i2270.reflectionProbeUsage = i2271[35]
  return i2270
}

Deserializers["rotate"] = function (request, data, root) {
  var i2274 = root || request.c( 'rotate' )
  var i2275 = data
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint' )
  var i2277 = data
  i2276.useMotor = !!i2277[0]
  i2276.useLimits = !!i2277[1]
  i2276.useSpring = !!i2277[2]
  i2276.limits = request.d('UnityEngine.JointLimits', i2277[3], i2276.limits)
  i2276.motor = request.d('UnityEngine.JointMotor', i2277[4], i2276.motor)
  i2276.spring = request.d('UnityEngine.JointSpring', i2277[5], i2276.spring)
  request.r(i2277[6], i2277[7], 0, i2276, 'connectedBody')
  i2276.axis = new pc.Vec3( i2277[8], i2277[9], i2277[10] )
  i2276.anchor = new pc.Vec3( i2277[11], i2277[12], i2277[13] )
  i2276.connectedAnchor = new pc.Vec3( i2277[14], i2277[15], i2277[16] )
  i2276.autoConfigureConnectedAnchor = !!i2277[17]
  i2276.massScale = i2277[18]
  i2276.connectedMassScale = i2277[19]
  i2276.enableCollision = !!i2277[20]
  i2276.breakForce = i2277[21]
  i2276.breakTorque = i2277[22]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2279 = data
  i2278.center = new pc.Vec3( i2279[0], i2279[1], i2279[2] )
  i2278.radius = i2279[3]
  i2278.height = i2279[4]
  i2278.direction = i2279[5]
  i2278.enabled = !!i2279[6]
  i2278.isTrigger = !!i2279[7]
  request.r(i2279[8], i2279[9], 0, i2278, 'material')
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2281 = data
  request.r(i2281[0], i2281[1], 0, i2280, 'sharedMesh')
  var i2283 = i2281[2]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 2) {
  request.r(i2283[i + 0], i2283[i + 1], 2, i2282, '')
  }
  i2280.bones = i2282
  i2280.updateWhenOffscreen = !!i2281[3]
  i2280.localBounds = i2281[4]
  request.r(i2281[5], i2281[6], 0, i2280, 'rootBone')
  var i2285 = i2281[7]
  var i2284 = []
  for(var i = 0; i < i2285.length; i += 1) {
    i2284.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2285[i + 0]) );
  }
  i2280.blendShapesWeights = i2284
  i2280.enabled = !!i2281[8]
  request.r(i2281[9], i2281[10], 0, i2280, 'sharedMaterial')
  var i2287 = i2281[11]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 2) {
  request.r(i2287[i + 0], i2287[i + 1], 2, i2286, '')
  }
  i2280.sharedMaterials = i2286
  i2280.receiveShadows = !!i2281[12]
  i2280.shadowCastingMode = i2281[13]
  i2280.sortingLayerID = i2281[14]
  i2280.sortingOrder = i2281[15]
  i2280.lightmapIndex = i2281[16]
  i2280.lightmapSceneIndex = i2281[17]
  i2280.lightmapScaleOffset = new pc.Vec4( i2281[18], i2281[19], i2281[20], i2281[21] )
  i2280.lightProbeUsage = i2281[22]
  i2280.reflectionProbeUsage = i2281[23]
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2293 = data
  i2292.weight = i2293[0]
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2295 = data
  i2294.center = new pc.Vec3( i2295[0], i2295[1], i2295[2] )
  i2294.size = new pc.Vec3( i2295[3], i2295[4], i2295[5] )
  i2294.enabled = !!i2295[6]
  i2294.isTrigger = !!i2295[7]
  request.r(i2295[8], i2295[9], 0, i2294, 'material')
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2297 = data
  request.r(i2297[0], i2297[1], 0, i2296, 'clip')
  request.r(i2297[2], i2297[3], 0, i2296, 'outputAudioMixerGroup')
  i2296.playOnAwake = !!i2297[4]
  i2296.loop = !!i2297[5]
  i2296.time = i2297[6]
  i2296.volume = i2297[7]
  i2296.pitch = i2297[8]
  i2296.enabled = !!i2297[9]
  return i2296
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2298 = root || request.c( 'UnityEngine.UI.Button' )
  var i2299 = data
  i2298.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2299[0], i2298.m_OnClick)
  i2298.m_Navigation = request.d('UnityEngine.UI.Navigation', i2299[1], i2298.m_Navigation)
  i2298.m_Transition = i2299[2]
  i2298.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2299[3], i2298.m_Colors)
  i2298.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2299[4], i2298.m_SpriteState)
  i2298.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2299[5], i2298.m_AnimationTriggers)
  i2298.m_Interactable = !!i2299[6]
  request.r(i2299[7], i2299[8], 0, i2298, 'm_TargetGraphic')
  return i2298
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2300 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2301 = data
  i2300.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2301[0], i2300.m_PersistentCalls)
  return i2300
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2302 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2303 = data
  var i2305 = i2303[0]
  var i2304 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.add(request.d('UnityEngine.Events.PersistentCall', i2305[i + 0]));
  }
  i2302.m_Calls = i2304
  return i2302
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2308 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2309 = data
  request.r(i2309[0], i2309[1], 0, i2308, 'm_Target')
  i2308.m_TargetAssemblyTypeName = i2309[2]
  i2308.m_MethodName = i2309[3]
  i2308.m_Mode = i2309[4]
  i2308.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2309[5], i2308.m_Arguments)
  i2308.m_CallState = i2309[6]
  return i2308
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2310 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2311 = data
  request.r(i2311[0], i2311[1], 0, i2310, 'm_ObjectArgument')
  i2310.m_ObjectArgumentAssemblyTypeName = i2311[2]
  i2310.m_IntArgument = i2311[3]
  i2310.m_FloatArgument = i2311[4]
  i2310.m_StringArgument = i2311[5]
  i2310.m_BoolArgument = !!i2311[6]
  return i2310
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2312 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2313 = data
  i2312.m_Mode = i2313[0]
  i2312.m_WrapAround = !!i2313[1]
  request.r(i2313[2], i2313[3], 0, i2312, 'm_SelectOnUp')
  request.r(i2313[4], i2313[5], 0, i2312, 'm_SelectOnDown')
  request.r(i2313[6], i2313[7], 0, i2312, 'm_SelectOnLeft')
  request.r(i2313[8], i2313[9], 0, i2312, 'm_SelectOnRight')
  return i2312
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2314 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2315 = data
  i2314.m_NormalColor = new pc.Color(i2315[0], i2315[1], i2315[2], i2315[3])
  i2314.m_HighlightedColor = new pc.Color(i2315[4], i2315[5], i2315[6], i2315[7])
  i2314.m_PressedColor = new pc.Color(i2315[8], i2315[9], i2315[10], i2315[11])
  i2314.m_SelectedColor = new pc.Color(i2315[12], i2315[13], i2315[14], i2315[15])
  i2314.m_DisabledColor = new pc.Color(i2315[16], i2315[17], i2315[18], i2315[19])
  i2314.m_ColorMultiplier = i2315[20]
  i2314.m_FadeDuration = i2315[21]
  return i2314
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2316 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2317 = data
  request.r(i2317[0], i2317[1], 0, i2316, 'm_HighlightedSprite')
  request.r(i2317[2], i2317[3], 0, i2316, 'm_PressedSprite')
  request.r(i2317[4], i2317[5], 0, i2316, 'm_SelectedSprite')
  request.r(i2317[6], i2317[7], 0, i2316, 'm_DisabledSprite')
  return i2316
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2318 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2319 = data
  i2318.m_NormalTrigger = i2319[0]
  i2318.m_HighlightedTrigger = i2319[1]
  i2318.m_PressedTrigger = i2319[2]
  i2318.m_SelectedTrigger = i2319[3]
  i2318.m_DisabledTrigger = i2319[4]
  return i2318
}

Deserializers["theball"] = function (request, data, root) {
  var i2320 = root || request.c( 'theball' )
  var i2321 = data
  i2320.rotationAmount = i2321[0]
  i2320.rotationSpeed = i2321[1]
  return i2320
}

Deserializers["Morphology"] = function (request, data, root) {
  var i2322 = root || request.c( 'Morphology' )
  var i2323 = data
  request.r(i2323[0], i2323[1], 0, i2322, 'highlightImage')
  i2322.scaleSpeed = i2323[2]
  i2322.minScale = i2323[3]
  i2322.maxScale = i2323[4]
  return i2322
}

Deserializers["SelectedPoint"] = function (request, data, root) {
  var i2324 = root || request.c( 'SelectedPoint' )
  var i2325 = data
  var i2327 = i2325[0]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 2) {
  request.r(i2327[i + 0], i2327[i + 1], 2, i2326, '')
  }
  i2324.targetObjects = i2326
  var i2329 = i2325[1]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 2) {
  request.r(i2329[i + 0], i2329[i + 1], 2, i2328, '')
  }
  i2324.ballMaterials = i2328
  var i2331 = i2325[2]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 1) {
    i2330.push( i2331[i + 0] );
  }
  i2324.ballTags = i2330
  request.r(i2325[3], i2325[4], 0, i2324, 'panel')
  request.r(i2325[5], i2325[6], 0, i2324, 'gamePlay')
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2337 = data
  i2336.type = i2337[0]
  i2336.color = new pc.Color(i2337[1], i2337[2], i2337[3], i2337[4])
  i2336.cullingMask = i2337[5]
  i2336.intensity = i2337[6]
  i2336.range = i2337[7]
  i2336.spotAngle = i2337[8]
  i2336.shadows = i2337[9]
  i2336.shadowNormalBias = i2337[10]
  i2336.shadowBias = i2337[11]
  i2336.shadowStrength = i2337[12]
  i2336.shadowResolution = i2337[13]
  i2336.lightmapBakeType = i2337[14]
  i2336.renderMode = i2337[15]
  request.r(i2337[16], i2337[17], 0, i2336, 'cookie')
  i2336.cookieSize = i2337[18]
  i2336.enabled = !!i2337[19]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2339 = data
  i2338.aspect = i2339[0]
  i2338.orthographic = !!i2339[1]
  i2338.orthographicSize = i2339[2]
  i2338.backgroundColor = new pc.Color(i2339[3], i2339[4], i2339[5], i2339[6])
  i2338.nearClipPlane = i2339[7]
  i2338.farClipPlane = i2339[8]
  i2338.fieldOfView = i2339[9]
  i2338.depth = i2339[10]
  i2338.clearFlags = i2339[11]
  i2338.cullingMask = i2339[12]
  i2338.rect = i2339[13]
  request.r(i2339[14], i2339[15], 0, i2338, 'targetTexture')
  i2338.usePhysicalProperties = !!i2339[16]
  i2338.focalLength = i2339[17]
  i2338.sensorSize = new pc.Vec2( i2339[18], i2339[19] )
  i2338.lensShift = new pc.Vec2( i2339[20], i2339[21] )
  i2338.gateFit = i2339[22]
  i2338.commandBufferCount = i2339[23]
  i2338.cameraType = i2339[24]
  i2338.enabled = !!i2339[25]
  return i2338
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2340 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2341 = data
  request.r(i2341[0], i2341[1], 0, i2340, 'm_FirstSelected')
  i2340.m_sendNavigationEvents = !!i2341[2]
  i2340.m_DragThreshold = i2341[3]
  return i2340
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2342 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2343 = data
  i2342.m_HorizontalAxis = i2343[0]
  i2342.m_VerticalAxis = i2343[1]
  i2342.m_SubmitButton = i2343[2]
  i2342.m_CancelButton = i2343[3]
  i2342.m_InputActionsPerSecond = i2343[4]
  i2342.m_RepeatDelay = i2343[5]
  i2342.m_ForceModuleActive = !!i2343[6]
  i2342.m_SendPointerHoverToParent = !!i2343[7]
  return i2342
}

Deserializers["BallController"] = function (request, data, root) {
  var i2344 = root || request.c( 'BallController' )
  var i2345 = data
  i2344.fixedZ = i2345[0]
  i2344.throwForce = i2345[1]
  i2344.upForceMultiplier = i2345[2]
  i2344.ballTapLayer = UnityEngine.LayerMask.FromIntegerValue( i2345[3] )
  return i2344
}

Deserializers["GameController"] = function (request, data, root) {
  var i2346 = root || request.c( 'GameController' )
  var i2347 = data
  request.r(i2347[0], i2347[1], 0, i2346, 'timerText')
  request.r(i2347[2], i2347[3], 0, i2346, 'HighestText')
  request.r(i2347[4], i2347[5], 0, i2346, 'SccoreText')
  request.r(i2347[6], i2347[7], 0, i2346, 'NotificationText')
  i2346.Score = i2347[8]
  i2346.Highest = i2347[9]
  i2346.HighestCurrently = i2347[10]
  request.r(i2347[11], i2347[12], 0, i2346, 'startchainParticle')
  request.r(i2347[13], i2347[14], 0, i2346, 'targetObject')
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2349 = data
  i2348.ambientIntensity = i2349[0]
  i2348.reflectionIntensity = i2349[1]
  i2348.ambientMode = i2349[2]
  i2348.ambientLight = new pc.Color(i2349[3], i2349[4], i2349[5], i2349[6])
  i2348.ambientSkyColor = new pc.Color(i2349[7], i2349[8], i2349[9], i2349[10])
  i2348.ambientGroundColor = new pc.Color(i2349[11], i2349[12], i2349[13], i2349[14])
  i2348.ambientEquatorColor = new pc.Color(i2349[15], i2349[16], i2349[17], i2349[18])
  i2348.fogColor = new pc.Color(i2349[19], i2349[20], i2349[21], i2349[22])
  i2348.fogEndDistance = i2349[23]
  i2348.fogStartDistance = i2349[24]
  i2348.fogDensity = i2349[25]
  i2348.fog = !!i2349[26]
  request.r(i2349[27], i2349[28], 0, i2348, 'skybox')
  i2348.fogMode = i2349[29]
  var i2351 = i2349[30]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2351[i + 0]) );
  }
  i2348.lightmaps = i2350
  i2348.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2349[31], i2348.lightProbes)
  i2348.lightmapsMode = i2349[32]
  i2348.mixedBakeMode = i2349[33]
  i2348.environmentLightingMode = i2349[34]
  i2348.ambientProbe = new pc.SphericalHarmonicsL2(i2349[35])
  i2348.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2349[36])
  i2348.useReferenceAmbientProbe = !!i2349[37]
  request.r(i2349[38], i2349[39], 0, i2348, 'customReflection')
  request.r(i2349[40], i2349[41], 0, i2348, 'defaultReflection')
  i2348.defaultReflectionMode = i2349[42]
  i2348.defaultReflectionResolution = i2349[43]
  i2348.sunLightObjectId = i2349[44]
  i2348.pixelLightCount = i2349[45]
  i2348.defaultReflectionHDR = !!i2349[46]
  i2348.hasLightDataAsset = !!i2349[47]
  i2348.hasManualGenerate = !!i2349[48]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2355 = data
  request.r(i2355[0], i2355[1], 0, i2354, 'lightmapColor')
  request.r(i2355[2], i2355[3], 0, i2354, 'lightmapDirection')
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2356 = root || new UnityEngine.LightProbes()
  var i2357 = data
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i2362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i2363 = data
  i2362.name = i2363[0]
  i2362.bounciness = i2363[1]
  i2362.dynamicFriction = i2363[2]
  i2362.staticFriction = i2363[3]
  i2362.frictionCombine = i2363[4]
  i2362.bounceCombine = i2363[5]
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2365 = data
  var i2367 = i2365[0]
  var i2366 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2367[i + 0]));
  }
  i2364.ShaderCompilationErrors = i2366
  i2364.name = i2365[1]
  i2364.guid = i2365[2]
  var i2369 = i2365[3]
  var i2368 = []
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.push( i2369[i + 0] );
  }
  i2364.shaderDefinedKeywords = i2368
  var i2371 = i2365[4]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2371[i + 0]) );
  }
  i2364.passes = i2370
  var i2373 = i2365[5]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2373[i + 0]) );
  }
  i2364.usePasses = i2372
  var i2375 = i2365[6]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2375[i + 0]) );
  }
  i2364.defaultParameterValues = i2374
  request.r(i2365[7], i2365[8], 0, i2364, 'unityFallbackShader')
  i2364.readDepth = !!i2365[9]
  i2364.isCreatedByShaderGraph = !!i2365[10]
  i2364.disableBatching = !!i2365[11]
  i2364.compiled = !!i2365[12]
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2379 = data
  i2378.shaderName = i2379[0]
  i2378.errorMessage = i2379[1]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2382 = root || new pc.UnityShaderPass()
  var i2383 = data
  i2382.id = i2383[0]
  i2382.subShaderIndex = i2383[1]
  i2382.name = i2383[2]
  i2382.passType = i2383[3]
  i2382.grabPassTextureName = i2383[4]
  i2382.usePass = !!i2383[5]
  i2382.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2383[6], i2382.zTest)
  i2382.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2383[7], i2382.zWrite)
  i2382.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2383[8], i2382.culling)
  i2382.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2383[9], i2382.blending)
  i2382.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2383[10], i2382.alphaBlending)
  i2382.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2383[11], i2382.colorWriteMask)
  i2382.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2383[12], i2382.offsetUnits)
  i2382.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2383[13], i2382.offsetFactor)
  i2382.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2383[14], i2382.stencilRef)
  i2382.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2383[15], i2382.stencilReadMask)
  i2382.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2383[16], i2382.stencilWriteMask)
  i2382.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2383[17], i2382.stencilOp)
  i2382.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2383[18], i2382.stencilOpFront)
  i2382.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2383[19], i2382.stencilOpBack)
  var i2385 = i2383[20]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2385[i + 0]) );
  }
  i2382.tags = i2384
  var i2387 = i2383[21]
  var i2386 = []
  for(var i = 0; i < i2387.length; i += 1) {
    i2386.push( i2387[i + 0] );
  }
  i2382.passDefinedKeywords = i2386
  var i2389 = i2383[22]
  var i2388 = []
  for(var i = 0; i < i2389.length; i += 1) {
    i2388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2389[i + 0]) );
  }
  i2382.passDefinedKeywordGroups = i2388
  var i2391 = i2383[23]
  var i2390 = []
  for(var i = 0; i < i2391.length; i += 1) {
    i2390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2391[i + 0]) );
  }
  i2382.variants = i2390
  var i2393 = i2383[24]
  var i2392 = []
  for(var i = 0; i < i2393.length; i += 1) {
    i2392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2393[i + 0]) );
  }
  i2382.excludedVariants = i2392
  i2382.hasDepthReader = !!i2383[25]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2395 = data
  i2394.val = i2395[0]
  i2394.name = i2395[1]
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2397 = data
  i2396.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2397[0], i2396.src)
  i2396.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2397[1], i2396.dst)
  i2396.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2397[2], i2396.op)
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2399 = data
  i2398.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2399[0], i2398.pass)
  i2398.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2399[1], i2398.fail)
  i2398.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2399[2], i2398.zFail)
  i2398.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2399[3], i2398.comp)
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2403 = data
  i2402.name = i2403[0]
  i2402.value = i2403[1]
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2407 = data
  var i2409 = i2407[0]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.push( i2409[i + 0] );
  }
  i2406.keywords = i2408
  i2406.hasDiscard = !!i2407[1]
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2413 = data
  i2412.passId = i2413[0]
  i2412.subShaderIndex = i2413[1]
  var i2415 = i2413[2]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 1) {
    i2414.push( i2415[i + 0] );
  }
  i2412.keywords = i2414
  i2412.vertexProgram = i2413[3]
  i2412.fragmentProgram = i2413[4]
  i2412.exportedForWebGl2 = !!i2413[5]
  i2412.readDepth = !!i2413[6]
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2419 = data
  request.r(i2419[0], i2419[1], 0, i2418, 'shader')
  i2418.pass = i2419[2]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2423 = data
  i2422.name = i2423[0]
  i2422.type = i2423[1]
  i2422.value = new pc.Vec4( i2423[2], i2423[3], i2423[4], i2423[5] )
  i2422.textureValue = i2423[6]
  i2422.shaderPropertyFlag = i2423[7]
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2425 = data
  i2424.name = i2425[0]
  request.r(i2425[1], i2425[2], 0, i2424, 'texture')
  i2424.aabb = i2425[3]
  i2424.vertices = i2425[4]
  i2424.triangles = i2425[5]
  i2424.textureRect = UnityEngine.Rect.MinMaxRect(i2425[6], i2425[7], i2425[8], i2425[9])
  i2424.packedRect = UnityEngine.Rect.MinMaxRect(i2425[10], i2425[11], i2425[12], i2425[13])
  i2424.border = new pc.Vec4( i2425[14], i2425[15], i2425[16], i2425[17] )
  i2424.transparency = i2425[18]
  i2424.bounds = i2425[19]
  i2424.pixelsPerUnit = i2425[20]
  i2424.textureWidth = i2425[21]
  i2424.textureHeight = i2425[22]
  i2424.nativeSize = new pc.Vec2( i2425[23], i2425[24] )
  i2424.pivot = new pc.Vec2( i2425[25], i2425[26] )
  i2424.textureRectOffset = new pc.Vec2( i2425[27], i2425[28] )
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2427 = data
  i2426.name = i2427[0]
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2429 = data
  i2428.name = i2429[0]
  i2428.ascent = i2429[1]
  i2428.originalLineHeight = i2429[2]
  i2428.fontSize = i2429[3]
  var i2431 = i2429[4]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2431[i + 0]) );
  }
  i2428.characterInfo = i2430
  request.r(i2429[5], i2429[6], 0, i2428, 'texture')
  i2428.originalFontSize = i2429[7]
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2435 = data
  i2434.index = i2435[0]
  i2434.advance = i2435[1]
  i2434.bearing = i2435[2]
  i2434.glyphWidth = i2435[3]
  i2434.glyphHeight = i2435[4]
  i2434.minX = i2435[5]
  i2434.maxX = i2435[6]
  i2434.minY = i2435[7]
  i2434.maxY = i2435[8]
  i2434.uvBottomLeftX = i2435[9]
  i2434.uvBottomLeftY = i2435[10]
  i2434.uvBottomRightX = i2435[11]
  i2434.uvBottomRightY = i2435[12]
  i2434.uvTopLeftX = i2435[13]
  i2434.uvTopLeftY = i2435[14]
  i2434.uvTopRightX = i2435[15]
  i2434.uvTopRightY = i2435[16]
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2437 = data
  var i2439 = i2437[0]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2439[i + 0]) );
  }
  i2436.files = i2438
  i2436.componentToPrefabIds = i2437[1]
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2443 = data
  i2442.path = i2443[0]
  request.r(i2443[1], i2443[2], 0, i2442, 'unityObject')
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2445 = data
  var i2447 = i2445[0]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2447[i + 0]) );
  }
  i2444.scriptsExecutionOrder = i2446
  var i2449 = i2445[1]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2449[i + 0]) );
  }
  i2444.sortingLayers = i2448
  var i2451 = i2445[2]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2451[i + 0]) );
  }
  i2444.cullingLayers = i2450
  i2444.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2445[3], i2444.timeSettings)
  i2444.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2445[4], i2444.physicsSettings)
  i2444.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2445[5], i2444.physics2DSettings)
  i2444.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2445[6], i2444.qualitySettings)
  i2444.enableRealtimeShadows = !!i2445[7]
  i2444.enableAutoInstancing = !!i2445[8]
  i2444.enableStaticBatching = !!i2445[9]
  i2444.enableDynamicBatching = !!i2445[10]
  i2444.lightmapEncodingQuality = i2445[11]
  i2444.desiredColorSpace = i2445[12]
  var i2453 = i2445[13]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.push( i2453[i + 0] );
  }
  i2444.allTags = i2452
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2457 = data
  i2456.name = i2457[0]
  i2456.value = i2457[1]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2461 = data
  i2460.id = i2461[0]
  i2460.name = i2461[1]
  i2460.value = i2461[2]
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2465 = data
  i2464.id = i2465[0]
  i2464.name = i2465[1]
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2467 = data
  i2466.fixedDeltaTime = i2467[0]
  i2466.maximumDeltaTime = i2467[1]
  i2466.timeScale = i2467[2]
  i2466.maximumParticleTimestep = i2467[3]
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2469 = data
  i2468.gravity = new pc.Vec3( i2469[0], i2469[1], i2469[2] )
  i2468.defaultSolverIterations = i2469[3]
  i2468.bounceThreshold = i2469[4]
  i2468.autoSyncTransforms = !!i2469[5]
  i2468.autoSimulation = !!i2469[6]
  var i2471 = i2469[7]
  var i2470 = []
  for(var i = 0; i < i2471.length; i += 1) {
    i2470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2471[i + 0]) );
  }
  i2468.collisionMatrix = i2470
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2475 = data
  i2474.enabled = !!i2475[0]
  i2474.layerId = i2475[1]
  i2474.otherLayerId = i2475[2]
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2477 = data
  request.r(i2477[0], i2477[1], 0, i2476, 'material')
  i2476.gravity = new pc.Vec2( i2477[2], i2477[3] )
  i2476.positionIterations = i2477[4]
  i2476.velocityIterations = i2477[5]
  i2476.velocityThreshold = i2477[6]
  i2476.maxLinearCorrection = i2477[7]
  i2476.maxAngularCorrection = i2477[8]
  i2476.maxTranslationSpeed = i2477[9]
  i2476.maxRotationSpeed = i2477[10]
  i2476.baumgarteScale = i2477[11]
  i2476.baumgarteTOIScale = i2477[12]
  i2476.timeToSleep = i2477[13]
  i2476.linearSleepTolerance = i2477[14]
  i2476.angularSleepTolerance = i2477[15]
  i2476.defaultContactOffset = i2477[16]
  i2476.autoSimulation = !!i2477[17]
  i2476.queriesHitTriggers = !!i2477[18]
  i2476.queriesStartInColliders = !!i2477[19]
  i2476.callbacksOnDisable = !!i2477[20]
  i2476.reuseCollisionCallbacks = !!i2477[21]
  i2476.autoSyncTransforms = !!i2477[22]
  var i2479 = i2477[23]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 1) {
    i2478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2479[i + 0]) );
  }
  i2476.collisionMatrix = i2478
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2483 = data
  i2482.enabled = !!i2483[0]
  i2482.layerId = i2483[1]
  i2482.otherLayerId = i2483[2]
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2485 = data
  var i2487 = i2485[0]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 1) {
    i2486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2487[i + 0]) );
  }
  i2484.qualityLevels = i2486
  var i2489 = i2485[1]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( i2489[i + 0] );
  }
  i2484.names = i2488
  i2484.shadows = i2485[2]
  i2484.anisotropicFiltering = i2485[3]
  i2484.antiAliasing = i2485[4]
  i2484.lodBias = i2485[5]
  i2484.shadowCascades = i2485[6]
  i2484.shadowDistance = i2485[7]
  i2484.shadowmaskMode = i2485[8]
  i2484.shadowProjection = i2485[9]
  i2484.shadowResolution = i2485[10]
  i2484.softParticles = !!i2485[11]
  i2484.softVegetation = !!i2485[12]
  i2484.activeColorSpace = i2485[13]
  i2484.desiredColorSpace = i2485[14]
  i2484.masterTextureLimit = i2485[15]
  i2484.maxQueuedFrames = i2485[16]
  i2484.particleRaycastBudget = i2485[17]
  i2484.pixelLightCount = i2485[18]
  i2484.realtimeReflectionProbes = !!i2485[19]
  i2484.shadowCascade2Split = i2485[20]
  i2484.shadowCascade4Split = new pc.Vec3( i2485[21], i2485[22], i2485[23] )
  i2484.streamingMipmapsActive = !!i2485[24]
  i2484.vSyncCount = i2485[25]
  i2484.asyncUploadBufferSize = i2485[26]
  i2484.asyncUploadTimeSlice = i2485[27]
  i2484.billboardsFaceCameraPosition = !!i2485[28]
  i2484.shadowNearPlaneOffset = i2485[29]
  i2484.streamingMipmapsMemoryBudget = i2485[30]
  i2484.maximumLODLevel = i2485[31]
  i2484.streamingMipmapsAddAllCameras = !!i2485[32]
  i2484.streamingMipmapsMaxLevelReduction = i2485[33]
  i2484.streamingMipmapsRenderersPerFrame = i2485[34]
  i2484.resolutionScalingFixedDPIFactor = i2485[35]
  i2484.streamingMipmapsMaxFileIORequests = i2485[36]
  i2484.currentQualityLevel = i2485[37]
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2495 = data
  i2494.weight = i2495[0]
  i2494.vertices = i2495[1]
  i2494.normals = i2495[2]
  i2494.tangents = i2495[3]
  return i2494
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint":{"useMotor":0,"useLimits":1,"useSpring":2,"limits":3,"motor":4,"spring":5,"connectedBody":6,"axis":8,"anchor":11,"connectedAnchor":14,"autoConfigureConnectedAnchor":17,"massScale":18,"connectedMassScale":19,"enableCollision":20,"breakForce":21,"breakTorque":22},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"enabled":19},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"28":[29],"53":[9],"54":[19],"55":[19],"26":[19],"56":[19],"57":[19],"58":[19],"59":[19],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[9],"75":[5],"76":[77],"78":[77],"8":[7],"79":[80],"81":[7],"82":[7],"12":[8],"14":[13,7],"83":[7],"11":[8],"84":[7],"85":[7],"86":[7],"87":[7],"88":[7],"89":[7],"90":[7],"91":[7],"92":[7],"93":[13,7],"94":[7],"95":[7],"96":[7],"97":[7],"15":[13,7],"98":[7],"99":[41],"100":[41],"42":[41],"101":[41],"102":[9],"103":[9],"104":[80],"105":[80]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.SphereCollider","UnityEngine.PhysicMaterial","UnityEngine.Rigidbody","UnityEngine.TrailRenderer","UnityEngine.MonoBehaviour","BallRotation","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","rotate","UnityEngine.HingeJoint","UnityEngine.CapsuleCollider","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.BoxCollider","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.UI.Button","SelectedPoint","theball","Morphology","UnityEngine.GameObject","UnityEngine.Light","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BallController","GameController","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f1";

Deserializers.productName = "Ball";

Deserializers.lunaInitializationTime = "08/18/2025 21:16:00";

Deserializers.lunaDaysRunning = "0.7";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "32202";

Deserializers.projectId = "d3397abdb64b32645b98120978015efe";

Deserializers.packagesInfo = "com.unity.timeline: 1.7.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "Ball";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.Ball.Ball";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "7cb2b8cd-e965-4e36-80f5-fccea3b104be";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

