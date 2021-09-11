import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:bewatertheater/widgets/navigation_bar/navigation_bar.dart';

class HomeView extends StatelessWidget {
  const HomeView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final ctxWidth = MediaQuery.of(context).size.width;
    final ctxHeight = MediaQuery.of(context).size.height+kToolbarHeight;
    final listItems = [
      Stack(alignment: Alignment.topCenter, children: <Widget>[
        Container(
          height: ctxHeight,
          decoration: BoxDecoration(
            image: DecorationImage(
              image: AssetImage('assets/images/bg.png'),
              fit: BoxFit.cover,
            ),
          ),
          child: null,
        ),
        Container(
          padding: EdgeInsets.fromLTRB(60, 0, 60, 60+kToolbarHeight),
          alignment: Alignment.bottomLeft,
          height: ctxHeight,
          width: ctxWidth,
          child: FittedBox(
              fit: BoxFit.fitWidth,
              child: SizedBox(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('在水剧场，',
                        style: TextStyle(
                          color: Colors.white,
                          fontFamily: 'Diary',
                          fontSize: 30,
                          fontWeight: FontWeight.w300,
                        )),
                    Text('我们一起玩戏剧。',
                        style: TextStyle(
                          color: Colors.white,
                          fontFamily: 'Diary',
                          fontSize: 30,
                          fontWeight: FontWeight.w300,
                        )),
                    Text('通过戏剧，联结灵魂，反思价值，',
                        style: TextStyle(
                          color: Colors.white,
                          fontFamily: 'Diary',
                          fontSize: 30,
                          fontWeight: FontWeight.w300,
                        )),
                    Text('见自己，见众生。',
                        style: TextStyle(
                          color: Colors.white,
                          fontFamily: 'Diary',
                          fontSize: 30,
                          fontWeight: FontWeight.w300,
                        ))
                  ],
                ),
              )),
        ),
      ]),
      Container(
        // padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 10),
        height: ctxHeight,
        child: Card(
          margin: EdgeInsets.all(15.0),
          color: Colors.blue,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.all(Radius.circular(10)),
          ),
        ),
      ),
      Container(
        height: ctxHeight,
        child: Card(
          margin: EdgeInsets.all(15.0),
          color: Colors.red,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.all(Radius.circular(10)),
          ),
        ),
      ),
      Container(
        height: ctxHeight,
        child: Card(
          margin: EdgeInsets.all(15.0),
          color: Colors.green,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.all(Radius.circular(10)),
          ),
        ),
      ),
    ];
    return Scaffold(
        body: Stack(
      children: [
        ListView.builder(
            itemCount: 4,
            itemBuilder: (context, index) {
              return listItems[index];
            }),
        Container(
          alignment: Alignment.center,
          height: kToolbarHeight,
          width: ctxWidth,
          color: Color.fromRGBO(0, 0, 0, 0.6),
          child: NavigationBar(),
        ),
      ],
    ));
  }
}
